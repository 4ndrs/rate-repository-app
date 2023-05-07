import { Image, StyleSheet, View } from "react-native";

import Text from "./Text";

import theme from "../theme";

import type { Repository } from "./RepositoryList";

type Props = { repository: Repository };

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.color.cardBg,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    // gap: 3, // rip no gap on 0.69.9
  },
  pseudoGap: {
    marginBottom: 3,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: theme.borderRadius.small,
    marginRight: 15,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: theme.color.tag,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: theme.borderRadius.small,
  },
  statisticsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  statistic: {
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

const RepositoryItem = ({ repository }: Props) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Image style={styles.image} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.textContainer}>
        <Text fontWeight="bold" style={styles.pseudoGap}>
          {repository.fullName}
        </Text>
        <Text color="gray" style={styles.pseudoGap}>
          {repository.description}
        </Text>
        <View style={styles.tag}>
          <Text color="textWhite">{repository.language}</Text>
        </View>
      </View>
    </View>

    <View style={styles.statisticsContainer}>
      <View style={styles.statistic}>
        <Text fontWeight="bold">
          {formatNumber(repository.stargazersCount)}
        </Text>
        <Text color="gray">Stars</Text>
      </View>
      <View style={styles.statistic}>
        <Text fontWeight="bold">{formatNumber(repository.forksCount)}</Text>
        <Text color="gray">Forks</Text>
      </View>
      <View style={styles.statistic}>
        <Text fontWeight="bold">{formatNumber(repository.reviewCount)}</Text>
        <Text color="gray">Reviews</Text>
      </View>
      <View style={styles.statistic}>
        <Text fontWeight="bold">{formatNumber(repository.ratingAverage)}</Text>
        <Text color="gray">Rating</Text>
      </View>
    </View>
  </View>
);

const formatNumber = (number: number) =>
  number > 1000 ? `${parseFloat((number / 1000).toFixed(1))}k` : `${number}`;

export default RepositoryItem;
