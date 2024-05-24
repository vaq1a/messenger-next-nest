import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { join } from 'path';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import GraphQLUpload, { FileUpload } from 'graphql-upload/GraphQLUpload.js';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { path } from 'app-root-path';

@Resolver(() => Boolean)
export class FileResolver {
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async uploadImage(
    @Args({ name: 'image', type: () => GraphQLUpload })
    image: Promise<FileUpload>,
  ) {
    console.log('image', image);
    const file = await image;
    console.log('file', file);
    // const dirPath = join(__dirname, '/uploads');
    const dirPath = `${path}/uploads/`;

    // Synchronous check if file/directory exists in Node.js
    if (!existsSync(dirPath)) {
      // The fs.mkdirSync() method is used to create a directory Synchronously
      mkdirSync(dirPath, { recursive: true });
    }

    return new Promise((resolve, reject) => {
      file
        .createReadStream()
        .pipe(createWriteStream(`${dirPath}/${file.filename}`))
        .on('finish', () => {
          console.log('image created in directory');

          resolve(true);
        })
        .on('error', (error) => {
          console.log('image load error: ', error);
          reject(false);
        });
    });
  }
}
