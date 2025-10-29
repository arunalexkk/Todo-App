import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar, StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import CustomNavigator from './navigation/CustomNavigator';

import store, {persistor} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import LoadingSpinnerComponent from './commonComponents/LoadingSpinner';

import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <Provider store={store}>
            <PersistGate
              persistor={persistor}
              loading={<LoadingSpinnerComponent />}>
              {/* <StatusBar backgroundColor="#000" /> */}
              <NavigationContainer>
                <CustomNavigator />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
