import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_NAME_BY_NAME = gql`
  mutation ChangePhilosopherNameByName(
    $userId: String!
    $name: String!
    $newName: String
  ) {
    changePhilosopherNameByName(
      userId: $userId
      name: $name
      newName: $newName
    ) {
      name
    }
  }
`;

export default CHANGE_PHILOSOPHER_NAME_BY_NAME;
