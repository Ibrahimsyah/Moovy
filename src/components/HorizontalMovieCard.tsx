import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../configs/styles';
import {Movie} from '../core';
import {DetailPageRoute} from '../presentation/Detail';

type HorizontalMovieCardProps = {
  movie: Movie;
};

const HorizontalMovieCard: React.FC<HorizontalMovieCardProps> = props => {
  const {movie} = props;
  const navigation = useNavigation();

  const onMovieClick = () => {
    navigation.navigate(DetailPageRoute, {
      movieId: movie.id,
    });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onMovieClick}>
      <Image source={{uri: movie.poster}} style={styles.thumbnail} />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 20,
  },
  thumbnail: {
    height: 170,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    color: Colors.primaryText,
    width: '100%',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});
export default HorizontalMovieCard;
