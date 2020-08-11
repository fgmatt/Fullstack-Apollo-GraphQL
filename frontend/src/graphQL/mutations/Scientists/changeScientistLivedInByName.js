import gql from "graphql-tag";

const CHANGE_SCIENTIST_LIVED_IN_BY_NAME = gql`
  mutation ChangeScientistLivedInByName($name: String!, $livedIn: String) {
    changeScientistLivedInByName(name: $name, livedIn: $livedIn) {
      name
      livedIn
    }
  }
`;

export default CHANGE_SCIENTIST_LIVED_IN_BY_NAME;
