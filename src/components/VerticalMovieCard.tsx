import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {Colors} from '../configs/styles';
import {Movie} from '../core';
const StarIcon = require('../assets/icons/star.png');

type VerticalMovieCardProps = {
  movie: Movie;
};

const VerticalMovieCard: React.FC<VerticalMovieCardProps> = (props) => {
  const {movie} = props;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(movie.title)}>
      <Image source={{uri: movie.poster}} style={styles.thumbnail} />
      <View style={styles.movieDetail}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {movie.title}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {movie.overview}
        </Text>
        <View style={styles.ratingContainer}>
          <Image source={StarIcon} style={styles.starIcon} />
          <Text style={styles.rating}>{movie.rating}</Text>
          <Text style={{color: Colors.primaryText}}> / 10</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  thumbnail: {
    height: 300,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  movieDetail: {
    flex: 1,
    maxWidth: '50%',
    padding: 16,
    height: 300,
  },
  title: {
    color: Colors.primaryText,
    width: '100%',
    marginTop: 8,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    fontFamily: 'Poppins-Thin',
    fontStyle: 'italic',
    fontSize: 12,
    color: Colors.secondaryText,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-end',
    color: Colors.primaryText,
  },
  starIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 8,
  },
  rating: {
    fontSize: 20,
    color: Colors.primaryText,
  },
});
export default VerticalMovieCard;
