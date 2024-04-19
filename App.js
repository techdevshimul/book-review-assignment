import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { navigate, navigationRef } from './src/Components/NavigationRoot';
import Store from "./src/redux/store";
import { Provider } from 'react-redux';
import AppNavigator from './src/Components/AppNavigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
