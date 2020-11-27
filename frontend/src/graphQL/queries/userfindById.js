import gql from "graphql-tag";

const USERFINDBYID = gql`
  query UserfindById($_id: String!, $token: String!) {
    userfindById(_id: $_id, token: $token) {
      _id
      email
      token
    }
  }
`;

export default USERFINDBYID;
