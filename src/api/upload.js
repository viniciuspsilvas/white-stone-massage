import gql from 'graphql-tag'

export const UPLOAD_FILE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) 
  }
`;

export const DELETE_FILE = gql`
  mutation deleteFile($path: String!) {
    deleteFile(path: $path) 
  }
`;

