import 'react-native-gesture-handler';
import React from 'react';
import HomePage from './presenters/Home';
import {Provider} from 'react-redux';
import {configureStore} from './core//frameworks/redux';

type AppProps = {
  name: string;
};

const App: React.FC<AppProps> = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
