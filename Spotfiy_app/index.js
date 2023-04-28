import {AppRegistry, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './components/Redux/store';
import {name as appName} from './app.json';
import Main_Navigation from './components/Navigation/Main_Navigation/Main_Navigation';
const Root = () => (
  <Provider store={store}>
    <Main_Navigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
