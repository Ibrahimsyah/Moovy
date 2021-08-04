import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {ParamsTypes} from '../routes';
import {MovieService} from '../core/services/apiService';
import {MovieInteractor} from '../core';
import {Colors} from '../configs/styles';
import {MovieDetail} from '../core/entities/movieDetail';
import MovieGenreList from '../components/MovieGenreList';

export const DetailPageRoute = 'detail';

const {height: viewportHeight} = Dimensions.get('window');
const service = new MovieService();
const interactor = new MovieInteractor(service);

const DetailPage: React.FC = () => {
  const route = useRoute<RouteProp<ParamsTypes, 'detail'>>();
  const {movieId} = route.params;

  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    interactor.getMovieDetail(movieId).then((detail: MovieDetail) => {
      setMovieDetail(detail);
      setLoading(false);
    });
  }, [movieId, setMovieDetail]);

  return (
    <>
      {(loading || imageLoading) && (
        <View style={styles.loader}>
          <ActivityIndicator color={Colors.primaryText} />
        </View>
      )}
      <ScrollView style={styles.container}>
        {!loading && (
          <View style={styles.posterContainer}>
            <Image
              source={{uri: movieDetail?.poster}}
              style={styles.posterImage}
              onLoadEnd={() => {
                setImageLoading(false);
              }}
            />
            <LinearGradient
              colors={['transparent', Colors.background]}
              style={styles.linearGradient}
            />
            <View style={styles.posterBottomBar}>
              <Text style={styles.year}>
                {movieDetail?.releaseDate.getFullYear()}
              </Text>
              <Text style={styles.title}>{movieDetail?.title}</Text>
              <MovieGenreList genres={movieDetail?.genres || []} />
            </View>
          </View>
        )}
        <View style={styles.bodyContainer}>
          <View style={styles.headContainer}>
            <View style={styles.headGrid}>
              <Text style={styles.popularity}>
                {movieDetail?.popularity.toPrecision(5)}
              </Text>
              <Text style={styles.headText}>Popularity</Text>
            </View>
            <View style={styles.headGrid}>
              <Text style={styles.rating}>{movieDetail?.vote}/10</Text>
              <Text style={styles.headText}>Rating</Text>
            </View>
            <View style={styles.headGrid}>
              <Text style={styles.duration}>{movieDetail?.runtime}min</Text>
              <Text style={styles.headText}>Duration</Text>
            </View>
          </View>
          <Text style={StyleSheet.flatten([styles.content, styles.tagline])}>
            {movieDetail?.tagline}
          </Text>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.content}>{movieDetail?.overview}</Text>
          <Text style={styles.sectionTitle}>Status</Text>
          <Text style={styles.content}>{movieDetail?.status}</Text>
          {movieDetail?.homepage !== '' && (
            <>
              <Text style={styles.sectionTitle}>Homepage</Text>
              <Text
                style={StyleSheet.flatten([styles.content, styles.link])}
                onPress={() => Linking.openURL(movieDetail?.homepage!!)}>
                {movieDetail?.homepage!!}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 2,
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  bodyContainer: {
    padding: 16,
  },
  posterContainer: {
    width: '100%',
    height: viewportHeight / 2,
    resizeMode: 'cover',
  },
  posterImage: {width: '100%', height: '100%'},
  posterBottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  year: {
    color: Colors.primaryText,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginBottom: -5,
  },
  title: {
    color: Colors.primaryText,
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 200,
  },
  sectionTitle: {
    color: Colors.primaryText,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginTop: 16,
  },
  content: {
    color: Colors.secondaryText,
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
  },
  link: {
    textDecorationLine: 'underline',
  },
  tagline: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: 'italic',
  },
  popularity: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.greenText,
  },
  duration: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.redText,
  },
  rating: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: Colors.yellowText,
  },
  headGrid: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 16,
  },
  headText: {
    color: Colors.primaryText,
  },
  starIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 8,
  },
});
export default DetailPage;
