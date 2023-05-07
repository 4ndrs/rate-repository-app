import { Text } from "react-native";

import type { Repository } from "./RepositoryList";

type Props = { repository: Repository };

const RepositoryItem = ({ repository }: Props) => (
  <>
    <Text>Full name: {repository.fullName}</Text>
    <Text>Description: {repository.description}</Text>
    <Text>Language: {repository.language}</Text>
    <Text>Stars: {repository.stargazersCount}</Text>
    <Text>Forks: {repository.forksCount}</Text>
    <Text>Reviews: {repository.reviewCount}</Text>
    <Text>Rating: {repository.ratingAverage}</Text>
  </>
);

export default RepositoryItem;
