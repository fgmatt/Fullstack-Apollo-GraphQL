import gql from "graphql-tag";

const DELETE_PHILOSPHER_BY_NAME = gql`
  mutation DeletePhilosopherByName($userId: String!, $name: String!) {
    deletePhilosopherByName(userId: $userId, name: $name) {
      name
    }
  }
`;

export default DELETE_PHILOSPHER_BY_NAME;
