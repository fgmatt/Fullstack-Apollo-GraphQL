import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_TOPICS_BY_NAME = gql`
  mutation ChangePhilosopherTopicsByName($name: String!, $topics: String) {
    changePhilosopherTopicsByName(name: $name, topics: $topics) {
      name
      topics
    }
  }
`;

export default CHANGE_PHILOSOPHER_TOPICS_BY_NAME;
