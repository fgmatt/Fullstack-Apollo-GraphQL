import gql from "graphql-tag";

const SEARCH_SCIENTIST_BY_NAME = gql`
  query SearchScientistByName($name: String!) {
    searchScientistByName(name: $name) {
      name
      livedIn
      biographicalData
      topics
      biography
    }
  }
`;

export default SEARCH_SCIENTIST_BY_NAME;
