import gql from "graphql-tag";

const CHANGE_SCIENTIST_NAME_BY_NAME = gql`
  mutation ChangeScientistNameByName($name: String!, $newName: String) {
    changeScientistNameByName(name: $name, newName: $newName) {
      name
    }
  }
`;

export default CHANGE_SCIENTIST_NAME_BY_NAME;
