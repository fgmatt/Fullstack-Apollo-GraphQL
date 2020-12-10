import gql from "graphql-tag";

const CHANGE_SCIENTIST_LIVED_IN_BY_NAME = gql`
  mutation ChangeScientistLivedInByName(
    $userId: String!
    $name: String!
    $livedIn: String
  ) {
    changeScientistLivedInByName(
      userId: $userId
      name: $name
      livedIn: $livedIn
    ) {
      name
      livedIn
    }
  }
`;

export default CHANGE_SCIENTIST_LIVED_IN_BY_NAME;
