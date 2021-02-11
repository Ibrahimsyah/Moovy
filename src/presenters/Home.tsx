import React from 'react';
import {Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import HorizontalMovieCard from '../components/HorizontalMovieCard';
import VerticalMovieCard from '../components/VerticalMovieCard';
import {Colors} from '../configs/styles';
import StateTypes from '../core/adapters/redux/reducers/stateTypes';

import {Movie} from '../core/entities';

export const HomePageRoute = 'home';

const HomePage: React.FC = () => {
  const movies: StateTypes['movies'] = useSelector(
    (state: StateTypes) => state.movies,
  );

  const renderNowPlaying = ({item}: {item: Movie}) => {
    return <HorizontalMovieCard movie={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Now Playing</Text>
      <FlatList
        style={styles.nowPlayingList}
        data={movies.nowPlaying}
        renderItem={renderNowPlaying}
        keyExtractor={(movie: Movie) => movie.id.toString()}
        horizontal={true}
      />
      <Text style={styles.sectionTitle}>Popular</Text>
      {movies.popular.map((movie: Movie) => (
        <VerticalMovieCard movie={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: Colors.background,
  },
  sectionTitle: {
    color: Colors.primaryText,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginBottom: 16,
    marginTop: 32,
  },
  nowPlayingList: {
    marginTop: 16,
  },
});

export default HomePage;
