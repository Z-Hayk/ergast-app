/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from './app/AppContainer';
import { GestureHandlerRoot } from './app/views/components';
import store, { persistor } from './app/store';

const App: React.FC = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRoot>
          <AppContainer />
        </GestureHandlerRoot>
      </PersistGate>
    </Provider>
  </SafeAreaProvider>
);

export default App;
