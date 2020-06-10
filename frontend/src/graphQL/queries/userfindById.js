import gql from "graphql-tag";

const USERFINDBYID = gql`
  query UserfindById($_id: String!) {
    userfindById(_id: $_id) {
      _id
      email
      token
    }
  }
`;

export default USERFINDBYID;