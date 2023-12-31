/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/index';

const warn = console.warn;

console.warn = params => {
  if (params.includes('Non-serializable values')) {
    return;
  }
  return warn;
};

AppRegistry.registerComponent('MiniAppView', () => App);
