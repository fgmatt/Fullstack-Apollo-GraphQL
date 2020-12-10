import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_LIVED_IN_BY_NAME = gql`
  mutation ChangePhilosopherLivedInByName(
    $userId: String!
    $name: String!
    $livedIn: String
  ) {
    changePhilosopherLivedInByName(
      userId: $userId
      name: $name
      livedIn: $livedIn
    ) {
      name
      livedIn
    }
  }
`;

export default CHANGE_PHILOSOPHER_LIVED_IN_BY_NAME;
