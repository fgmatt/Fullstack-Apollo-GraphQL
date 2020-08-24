import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_LIVED_IN_BY_NAME = gql`
  mutation ChangePhilosopherLivedInByName($name: String!, $livedIn: String) {
    changePhilosopherLivedInByName(name: $name, livedIn: $livedIn) {
      name
      livedIn
    }
  }
`;

export default CHANGE_PHILOSOPHER_LIVED_IN_BY_NAME;
