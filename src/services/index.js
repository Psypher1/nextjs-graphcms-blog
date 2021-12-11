import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

// fetch all the posts
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
// fetch single posts
export async function getSinglePost(slug) {
  const query = gql`
    query GetSinglePost($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        body {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  //   after query , make request
  const results = await request(graphqlAPI, query, { slug });

  return results.post;
}

// fetch the recent posts
export async function getRecentPosts() {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt:ASC
        last: 3
      ){
        title
        featureImage{
          url
        }
        createdAt
        slug
      }
    }
    
  `;

  //   after query , make request
  const results = await request(graphqlAPI, query);

  return results.posts;
}

// fetch similar posts
export async function getSimilarPosts() {
  const query = gql`
    query GetPostDetails($slug: String, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
}
