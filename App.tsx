import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, SettingsScreen} from './src/screens';
import {TemperatureProvider} from './src/context/temperatureContext';

export enum ScreenNames {
  Home = 'home',
  Settings = 'settingsScreen',
}

type IRootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Settings]: undefined;
};

const Stack = createNativeStackNavigator<IRootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.Home}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.Settings}
          component={SettingsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <TemperatureProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </TemperatureProvider>
  );
}

export default App;
