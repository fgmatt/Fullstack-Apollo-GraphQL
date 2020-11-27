import gql from "graphql-tag";

const USERFIND = gql`
  query Userfind($email: String!, $token: String!) {
    userfind(email: $email, token: $token) {
      email
      token
    }
  }
`;
export default USERFIND;
