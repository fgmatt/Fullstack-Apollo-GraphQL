import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_WORKS_BY_NAME = gql`
  mutation ChangePhilosopherWorksByName(
    $userId: String!
    $name: String!
    $works: String
  ) {
    changePhilosopherWorksByName(userId: $userId, name: $name, works: $works) {
      name
      works
    }
  }
`;

export default CHANGE_PHILOSOPHER_WORKS_BY_NAME;
