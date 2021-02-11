import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import HomePage from './presenters/Home';
import {Provider} from 'react-redux';
import {configureStore} from './core/frameworks/redux';
import { Colors } from './configs/styles';

type AppProps = {
  name: string;
};

const App: React.FC<AppProps> = () => {
  StatusBar.setBackgroundColor(Colors.background);
  const store = configureStore();
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
