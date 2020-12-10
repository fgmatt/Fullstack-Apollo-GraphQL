import gql from "graphql-tag";

const CREATE_PHILOSOPHER = gql`
  mutation CreatePhilospher(
    $userId: String!
    $name: String!
    $livedIn: String
    $biographicalData: String
    $topics: String
    $biography: String
    $works: String
  ) {
    createPhilosopher(
      userId: $userId
      name: $name
      livedIn: $livedIn
      biographicalData: $biographicalData
      topics: $topics
      biography: $biography
      works: $works
    ) {
      name
      livedIn
      biographicalData
      topics
      biography
      works
    }
  }
`;

export default CREATE_PHILOSOPHER;
