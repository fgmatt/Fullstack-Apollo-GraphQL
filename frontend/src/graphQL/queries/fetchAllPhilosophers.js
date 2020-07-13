import gql from "graphql-tag";

const FETCH_ALL_PHILOSOPHERS = gql`
  query FetchAllPhilosophers {
    allPhilosophers {
      name
      livedIn
      biographicalData
      topics
      biography
      works
    }
  }
`;

export default FETCH_ALL_PHILOSOPHERS;