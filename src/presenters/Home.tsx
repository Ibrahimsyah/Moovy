import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import StateTypes from '../core/adapters/redux/reducers/stateTypes';
import {getNowPlayingMoviesAction} from '../core/adapters/redux/sagas';

interface HomepagePropsType {
  movies: StateTypes['movies'];
  dispatchGetNowPlaying: () => void;
}
const HomePage: React.FC<HomepagePropsType> = (props) => {
  const {dispatchGetNowPlaying} = props;

  useEffect(() => {
    dispatchGetNowPlaying();
  }, [dispatchGetNowPlaying]);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: StateTypes) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  dispatchGetNowPlaying: getNowPlayingMoviesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
