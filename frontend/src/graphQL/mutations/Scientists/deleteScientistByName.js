import gql from "graphql-tag";

const DELETE_SCIENTIST_BY_NAME = gql`
  mutation DeleteScientistByName($name: String!) {
    deleteScientistByName(name: $name) {
      name
    }
  }
`;

export default DELETE_SCIENTIST_BY_NAME;