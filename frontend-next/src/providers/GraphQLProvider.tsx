'use client';

import {ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, fromPromise, split} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {GetNewTokensDocument} from "@/graphql/mutations/GetNewTokens.generated";
import Cookies from "js-cookie";
// @ts-ignore
import createUploadLink from "apollo-upload-client/createUploadLink.mjs"
import {getMainDefinition} from "@apollo/client/utilities";
import {WebSocketLink} from "@apollo/client/link/ws";

const getNewTokens = async () => {
    return client.mutate({
        mutation: GetNewTokensDocument,
    })
}

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
        if (
            graphQLErrors.some(({ extensions: { code } }) =>
                ['UNAUTHENTICATED', 'PERMISSION_DENIED'].includes(code as string)
            )
        ) {
            return fromPromise(
                getNewTokens()
            ).flatMap(({ data }) => {
                Cookies.set('at', data.getNewTokens.accessToken, {
                    domain: 'localhost',
                    sameSite: "strict",
                    secure: false,
                    expires: new Date(Date.now() + 1800000),
                });

                return forward(operation)
            })
        }
    }

    return forward(operation);
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    },
})

const httplink = ApolloLink.from([errorLink, createUploadLink(
    {
        uri: 'http://localhost:4000/graphql',
        credentials: 'include',
        headers: {
            'Apollo-Require-Preflight': 'true',
        },
    })])

const link = typeof window !== "undefined" ? split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return (
            kind === "OperationDefinition" &&
            operation === "subscription"
        )
    },
    wsLink,
    httplink
) : httplink

const client = new ApolloClient({
    headers: {
        'Apollo-Require-Preflight': 'true',
    },
    cache: new InMemoryCache(),
    credentials: 'include',
    defaultOptions: {
        mutate: {
            fetchPolicy: "network-only",
            errorPolicy: "all"
        },
        query: {
            errorPolicy: "all",
        }
    },
    link,
});

interface IGraphQlProviderProps {
    children: React.ReactNode;
}

const GraphQlProvider: React.FC<IGraphQlProviderProps> = (
    {
        children,
    }
) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default GraphQlProvider;