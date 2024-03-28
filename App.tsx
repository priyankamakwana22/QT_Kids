import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from './src/screens/Splash';
import Dashboard from './src/screens/Dashboard';
import {Image, View} from 'react-native';
import Main from './src/screens/Main';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ContactUs from './src/screens/ContactUs';
import Policy from './src/screens/Policy';
import HeaderTop from './src/screens/HeaderTop';

export type RootStackParamsList = {
  Splash: undefined;
  Dashboard: undefined;
  Main: {title: string};
  Policy: undefined;
  ContactUs: undefined;
  HeaderTop: {title: string};
};

const Stack = createStackNavigator<RootStackParamsList>();
const Drawer = createDrawerNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Screen name='HeaderTop' component={HeaderTop} /> */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeaderTop"
          component={HeaderTop}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitle: 'Good Afternoon',
            // <FontAwesomeIcon icon={'btc'} />
            headerLeft: () => (
              <Image
                source={require('./src/assets/menu.png')}
                style={{width: 35, height: 40, marginLeft: 10}}
                resizeMode="contain"
              />
            ),
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/018/972/609/original/cute-sun-illustration-design-png.png',
                }}
                style={{width: 40, height: 40, marginLeft: 10}}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitle: 'Title',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

{
  /* <NavigationContainer>
<Drawer.Navigator>
  <Drawer.Screen name='ContactUs' component={ContactUs} />
  <Drawer.Screen name='Policy' component={Policy} />
</Drawer.Navigator>
</NavigationContainer> */
}
