import gql from "graphql-tag";

const CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME = gql`
  mutation ChangeScientistBiographyByName($name: String!, $biography: String) {
    changeScientistBiographyByName(name: $name, biography: $biography) {
      name
      biography
    }
  }
`;

export default CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME;
