import gql from "graphql-tag";

const CHANGE_PHILOSOPHER_TOPICS_BY_NAME = gql`
  mutation ChangePhilosopherTopicsByName(
    $userId: String!
    $name: String!
    $topics: String
  ) {
    changePhilosopherTopicsByName(
      userId: $userId
      name: $name
      topics: $topics
    ) {
      name
      topics
    }
  }
`;

export default CHANGE_PHILOSOPHER_TOPICS_BY_NAME;
