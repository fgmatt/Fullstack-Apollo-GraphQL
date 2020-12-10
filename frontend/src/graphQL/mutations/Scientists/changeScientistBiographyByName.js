import gql from "graphql-tag";

const CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME = gql`
  mutation ChangeScientistBiographyByName(
    $userId: String!
    $name: String!
    $biography: String
  ) {
    changeScientistBiographyByName(
      userId: $userId
      name: $name
      biography: $biography
    ) {
      name
      biography
    }
  }
`;

export default CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME;
