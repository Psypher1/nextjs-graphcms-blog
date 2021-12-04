import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export async function getPosts() {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  //   after query , make request
  const results = await request(graphqlAPI, query);

  return results.postsConnection.edges;
}
