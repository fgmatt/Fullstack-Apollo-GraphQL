import gql from "graphql-tag";

const CHANGE_SCIENTIST_TOPICS_BY_NAME = gql`
  mutation ChangeScientistTopicsByName($name: String!, $topics: String) {
    changeScientistTopicsByName(name: $name, topics: $topics) {
      name
      topics
    }
  }
`;

export default CHANGE_SCIENTIST_TOPICS_BY_NAME;
