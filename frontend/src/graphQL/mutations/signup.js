import gql from 'graphql-tag';

const SIGNUP = gql`
    mutation Signup($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
            email
    }
}
`
export default SIGNUP;
