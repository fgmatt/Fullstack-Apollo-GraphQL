import gql from "graphql-tag";

const SEARCH_PHILOSOPHER_BY_NAME = gql`
  query SearchPhilosopherByName($name: String!) {
    searchPhilosopherByName(name: $name) {
      name
      livedIn
      biographicalData
      topics
      biography
      works
    }
  }
`;

export default SEARCH_PHILOSOPHER_BY_NAME;