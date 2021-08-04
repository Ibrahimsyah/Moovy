import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage, {HomePageRoute} from '../presentation/Home';
import SplashPage, {SplashPageRoute} from '../presentation/Splash';
import DetailPage, {DetailPageRoute} from '../presentation/Detail';

const Stack = createStackNavigator<ParamsTypes>();

export type ParamsTypes = {
  [SplashPageRoute]: {};
  [HomePageRoute]: {};
  [DetailPageRoute]: {
    movieId: number;
  };
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SplashPageRoute} headerMode="none">
        <Stack.Screen name={SplashPageRoute} component={SplashPage} />
        <Stack.Screen name={HomePageRoute} component={HomePage} />
        <Stack.Screen name={DetailPageRoute} component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
