import gql from "graphql-tag";

const CHANGE_SCIENTIST_NAME_BY_NAME = gql`
  mutation ChangeScientistNameByName(
    $userId: String!
    $name: String!
    $newName: String
  ) {
    changeScientistNameByName(userId: $userId, name: $name, newName: $newName) {
      name
    }
  }
`;

export default CHANGE_SCIENTIST_NAME_BY_NAME;
