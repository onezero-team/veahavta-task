import { GraphQLClient } from 'graphql-request'
import dotenv from 'dotenv'
dotenv.config()

export function request({ query, variables, preview }: any) {
  if (!preview || !variables) {
    return
  }
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      authorization: `Bearer 86792c92190d8634bfb2d83a8c484a`,

    },
  })
  

  return client.request(query, variables)
}
