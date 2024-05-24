
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schemas/schema.graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    'src/__generated__/types.generated.ts': {
      plugins: ['typescript']
    },
    'src/__generated__/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
      },
      plugins: [
          'typescript-operations',
          'typescript-react-apollo'
      ],
    },
  },
};

export default config;
