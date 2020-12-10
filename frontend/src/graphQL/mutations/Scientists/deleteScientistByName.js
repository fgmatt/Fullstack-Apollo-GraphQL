import gql from "graphql-tag";

const DELETE_SCIENTIST_BY_NAME = gql`
  mutation DeleteScientistByName($userId: String!, $name: String!) {
    deleteScientistByName(userId: $userId, name: $name) {
      name
    }
  }
`;

export default DELETE_SCIENTIST_BY_NAME;
