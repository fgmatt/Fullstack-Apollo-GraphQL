import gql from 'graphql-tag';

const CHANGE_CREDS = gql`
    mutation ChangeCreds($_id: String!, $email: String, $password: String) {
        changeCreds(_id: $_id, email: $email, password: $password) {
            email
            }
}
`;
export default CHANGE_CREDS;