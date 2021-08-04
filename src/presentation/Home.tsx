import React from 'react';
import {Text, StyleSheet, FlatList, ScrollView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import HorizontalMovieCard from '../components/HorizontalMovieCard';
import VerticalMovieCard from '../components/VerticalMovieCard';
import MovieCarouselItem from '../components/MovieCarouselItem';
import {Colors} from '../configs/styles';
import StateTypes from '../core/adapters/redux/reducers/stateTypes';
import {Movie} from '../core/entities';

export const HomePageRoute = 'home';

const contentPadding = 16;
const {width: viewportWidth} = Dimensions.get('window');

const HomePage: React.FC = () => {
  const movies: StateTypes['movies'] = useSelector(
    (state: StateTypes) => state.movies,
  );

  const renderNowPlaying = ({item}: {item: Movie}) => {
    return <HorizontalMovieCard movie={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <Carousel
        autoplay={true}
        data={movies.upcoming}
        loop={true}
        sliderWidth={viewportWidth - 2 * contentPadding}
        itemWidth={viewportWidth - 2 * contentPadding}
        renderItem={({item}: {item: Movie; index: number}) => (
          <MovieCarouselItem movie={item} key={item.id} />
        )}
      />

      <Text style={styles.sectionTitle}>Now Playing</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
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
    padding: contentPadding,
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
});

export default HomePage;
