import gql from "graphql-tag";

const CHANGE_EMAIL = gql`
  mutation ChangeEmail($_id: String!, $email: String!, $password: String!) {
    changeEmail(_id: $_id, email: $email, password: $password) {
      email
    }
  }
`;

export default CHANGE_EMAIL;