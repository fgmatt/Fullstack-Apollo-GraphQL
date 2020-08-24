import gql from "graphql-tag";

const CHANGE_BIOGRAPHICAL_DATA_BY_NAME = gql`
  mutation ChangePhilosopherBiographicalDataByName(
    $name: String!
    $biographicalData: String
  ) {
    changePhilosopherBiographicalDataByName(
      name: $name
      biographicalData: $biographicalData
    ) {
      name
      biographicalData
    }
  }
`;

export default CHANGE_BIOGRAPHICAL_DATA_BY_NAME;
