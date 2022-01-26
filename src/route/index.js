
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import NavApp from './appStack';
import AuthApp from './authStack';

const AppStack = createNativeStackNavigator();
const App = () => {
//   useEffect(()=>{
//     console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// console.disableYellowBox = true;
//   },[])
  return (
    <NavigationContainer>
      {/* <Drawer/> */}
      <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={'Auth'} component={AuthApp} />
      <AppStack.Screen name={'NavApp'} component={NavApp} />
        
      </AppStack.Navigator>
    </NavigationContainer> 
  );
};

export default App;