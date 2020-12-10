import gql from "graphql-tag";

const CHANGE_PHILOSOPHER = gql`
  mutation ChangePhilosopher(
    $userId: String!
    $name: String!
    $livedIn: String
    $biographicalData: String
    $topics: String
    $biography: String
    $works: String
  ) {
    ChangePhilosopher(
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

export default CHANGE_PHILOSOPHER;
