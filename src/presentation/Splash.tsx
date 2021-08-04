import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getInitialDataAction} from '../core/adapters/redux/sagas';
import {HomePageRoute} from './Home';
import {Colors} from '../configs/styles';
import StateTypes from '../core/adapters/redux/reducers/stateTypes';

export const SplashPageRoute = 'splash';

const SplashPage: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const loadingState: boolean = useSelector(
    (state: StateTypes) => state.loading.initialData,
  );

  useEffect(() => {
    dispatch(getInitialDataAction());
  }, [dispatch]);

  useEffect(() => {
    if (!loadingState) {
      navigation.reset({
        index: 1,
        routes: [{name: HomePageRoute}],
      });
    }
  }, [navigation, loadingState]);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Moovy</Text>
      <ActivityIndicator size="small" color={Colors.primaryText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: Colors.primaryText,
  },
});

export default SplashPage;
