import gql from "graphql-tag";

const CHANGE_PASSWORD = gql`
  mutation ChangePassword(
    $_id: String!
    $password: String!
    $newPassword: String!
  ) {
    changePassword(_id: $_id, password: $password, newPassword: $newPassword) {
      email
    }
  }
`;

export default CHANGE_PASSWORD;