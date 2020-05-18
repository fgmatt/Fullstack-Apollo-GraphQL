import gql from 'graphql-tag';

const HELLO = gql`
    query Hello {
        hello
    }
}
`;
export default HELLO;