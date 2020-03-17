import gql from 'graphql-tag'

export const GET_ALL = gql`
  query staffs($filter: StaffInput!) {
    staffs(filter: $filter) {
      id
      firstname
      lastname
      email
      abn
      tfn
      picture
      createdAt
      updatedAt
    }
  }
`;

export const GET_STAFF = gql`
  query staff($filter: StaffInput!) {
    staff(filter: $filter) {
      id
      firstname
      lastname
      email
      abn
      tfn
      picture
      createdAt
      updatedAt
      user {
        username
      }
    }
  }
`;
