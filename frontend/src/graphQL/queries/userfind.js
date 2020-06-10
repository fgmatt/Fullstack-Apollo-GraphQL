import gql from "graphql-tag";

const USERFIND = gql`
  query Userfind($email: String!) {
    userfind(email: $email) {
      email
      token
    }
  }
`;
export default USERFIND;
