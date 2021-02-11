import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../configs/styles';
import {Movie} from '../core';

type MovieCarouselItemProps = {
  movie: Movie;
};

const MovieCarouselItem: React.FC<MovieCarouselItemProps> = (props) => {
  const {movie} = props;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(movie.title)}>
      <Image source={{uri: movie.poster}} style={styles.thumbnail} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {movie.title}
      </Text>
      <Text style={styles.overview} numberOfLines={2} ellipsizeMode="tail">
        {movie.overview}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {},
  thumbnail: {
    height: 170,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    color: Colors.primaryText,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  overview: {
    fontFamily: 'Poppins-Thin',
    fontStyle: 'italic',
    fontSize: 12,
    color: Colors.secondaryText,
  },
});
export default MovieCarouselItem;
