import gql from "graphql-tag";

const CREATE_SCIENTIST = gql`
  mutation CreateScientist(
    $userId: String!
    $name: String!
    $livedIn: String
    $biographicalData: String
    $topics: String
    $biography: String
  ) {
    createScientist(
      userId: $userId
      name: $name
      livedIn: $livedIn
      biographicalData: $biographicalData
      topics: $topics
      biography: $biography
    ) {
      name
      livedIn
      biographicalData
      topics
      biography
    }
  }
`;

export default CREATE_SCIENTIST;
