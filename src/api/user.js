import gql from 'graphql-tag'

export const GET_USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      username
      active
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_BY_FILTER = gql`
  query userByFilter($filter: UserInput!) {
    userByFilter(filter: $filter) {
      id
      username
      active
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_BY_TOKEN = gql`
  query userByToken {
    userByToken {
      id
      username
      createdAt
      updatedAt
      staff {
        firstname
        lastname
        picture
      }
    }
  }
`;
