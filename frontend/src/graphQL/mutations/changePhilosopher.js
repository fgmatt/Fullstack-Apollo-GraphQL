import gql from "graphql-tag";

const CHANGE_PHILOSOPHER = gql`
  mutation ChangePhilosopher(
    $name: String!
    $livedIn: String
    $biographicalData: String
    $topics: String
    $biography: String
    $works: String
  ) {
    ChangePhilosopher(
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

export default CHANGE_SCIENTIST;