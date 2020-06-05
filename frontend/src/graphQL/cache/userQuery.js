import gql from "graphql-tag";

const userQuery = gql`
  query UserQuery {
    user {
      id
      token
    }
  }
`;

export default userQuery;