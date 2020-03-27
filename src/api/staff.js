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
      mobile
      commercialPhone
      picture
      createdAt
      updatedAt
      user {
        username
      }
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
      mobile
      commercialPhone
      picture
      createdAt
      updatedAt
      user {
        username
      }
      staff_address {
        address {
          address
          postcode
          state
        }
      }
    }
  }
`;

export const CREATE_STAFF = gql`
  mutation createStaff($staff: StaffInput!) {
    createStaff(staff: $staff)
  }
`;

export const DELETE_PICTURE = gql`
  mutation deletePicture($staff: StaffInput!) {
    deletePicture(staff: $staff)
  }
`;

export const UPLOAD_PICTURE = gql`
  mutation uploadPicture($staff: StaffInput!) {
    uploadPicture(staff: $staff)
  }
`;