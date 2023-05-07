import Text from "./Text";

import type { Repository } from "./RepositoryList";

type Props = { repository: Repository };

const RepositoryItem = ({ repository }: Props) => (
  <>
    <Text>
      <Text fontWeight="bold">Full name</Text>: {repository.fullName}
    </Text>
    <Text>
      <Text fontWeight="bold">Description</Text>: {repository.description}
    </Text>
    <Text>
      <Text fontWeight="bold">Language</Text>: {repository.language}
    </Text>
    <Text>
      <Text fontWeight="bold">Stars</Text>: {repository.stargazersCount}
    </Text>
    <Text>
      <Text fontWeight="bold">Forks</Text>: {repository.forksCount}
    </Text>
    <Text>
      <Text fontWeight="bold">Reviews</Text>: {repository.reviewCount}
    </Text>
    <Text>
      <Text fontWeight="bold">Rating</Text>: {repository.ratingAverage}
    </Text>
  </>
);

export default RepositoryItem;
