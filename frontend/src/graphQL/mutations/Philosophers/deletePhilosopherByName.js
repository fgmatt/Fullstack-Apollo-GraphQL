import gql from "graphql-tag";

const DELETE_PHILOSPHER_BY_NAME = gql`
  mutation DeletePhilosopherByName($name: String!) {
    deletePhilosopherByName(name: $name) {
      name
    }
  }
`;

export default DELETE_PHILOSPHER_BY_NAME;
