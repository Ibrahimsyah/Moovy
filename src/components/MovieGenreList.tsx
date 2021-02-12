import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from '../configs/styles';

type MovieGenreListProps = {
  genres: string[];
};

type MovieGenreProps = {
  genre: string;
};

const MovieGenre: React.FC<MovieGenreProps> = ({genre}) => {
  return (
    <View style={styles.genreContainer}>
      <Text style={styles.genre}>{genre}</Text>
    </View>
  );
};
const MovieGenreList: React.FC<MovieGenreListProps> = (props) => {
  const {genres} = props;

  return (
    <View style={styles.genresContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.genresContainer}
        horizontal={true}
        data={genres}
        keyExtractor={(_, index: number) => index.toString()}
        renderItem={({item}: {item: string}) => <MovieGenre genre={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  genresContainer: {
    width: '100%',
  },
  genreContainer: {
    borderRadius: 5,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  genre: {
    fontFamily: 'Poppins-Regular',
    color: Colors.secondaryText,
    fontSize: 12,
  },
});
export default MovieGenreList;
