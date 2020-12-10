import gql from "graphql-tag";

const CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME = gql`
  mutation ChangeScientistBiographicalDataByName(
    $userId: String!
    $name: String!
    $biographicalData: String
  ) {
    changeScientistBiographicalDataByName(
      userId: $userId
      name: $name
      biographicalData: $biographicalData
    ) {
      name
      biographicalData
    }
  }
`;

export default CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME;
