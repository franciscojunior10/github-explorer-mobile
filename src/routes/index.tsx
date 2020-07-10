import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#F0F0F5'},
    }}>
    <Route.Screen name="Dashboard" component={Dashboard} />
    <Route.Screen name="Repository" component={Repository} />
  </Route.Navigator>
);

export default Routes;
