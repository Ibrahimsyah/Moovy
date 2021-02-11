import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './core/frameworks/redux';
import {Colors} from './configs/styles';
import Routes from './routes';

const App: React.FC = () => {
  StatusBar.setBackgroundColor(Colors.background);
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
