import gql from 'graphql-tag';

const SIGNIN = gql`
    mutation Signin($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            email
    }
}
`
export default SIGNIN;
