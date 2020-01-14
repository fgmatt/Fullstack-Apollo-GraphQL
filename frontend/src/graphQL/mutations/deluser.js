import gql from 'graphql-tag';

const DELUSER = gql`
    mutation Deluser($_id: String!) {
        deluser(_id: $_id) {
        email
  }
}
`
export default DELUSER;