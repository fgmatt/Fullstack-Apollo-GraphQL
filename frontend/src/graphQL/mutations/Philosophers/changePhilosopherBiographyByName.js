import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_BIOGRAPHY_BY_NAME = gql`
  mutation ChangePhilosopherBiographyByName(
    $name: String!
    $biography: String
  ) {
    changePhilosopherBiographyByName(name: $name, biography: $biography) {
      name
      biography
    }
  }
`;

export default CHANGE_PHILOSOPHER_BIOGRAPHY_BY_NAME;
