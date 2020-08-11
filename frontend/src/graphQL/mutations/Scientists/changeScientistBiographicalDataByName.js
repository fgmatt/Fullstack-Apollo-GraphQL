import gql from "graphql-tag";

const CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME = gql`
  mutation ChangeScientistBiographicalDataByName(
    $name: String!
    $biographicalData: String
  ) {
    changeScientistBiographicalDataByName(
      name: $name
      biographicalData: $biographicalData
    ) {
      name
      biographicalData
    }
  }
`;

export default CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME;
