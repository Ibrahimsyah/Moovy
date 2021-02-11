import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage, {HomePageRoute} from '../presenters/Home';
import SplashPage, {SplashPageRoute} from '../presenters/Splash';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SplashPageRoute} headerMode="none">
        <Stack.Screen name={SplashPageRoute} component={SplashPage} />
        <Stack.Screen name={HomePageRoute} component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;