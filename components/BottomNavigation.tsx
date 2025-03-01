import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof FontAwesome>["name"] = 'home';

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Bookings') {
              iconName = 'calendar';
            } else if (route.name === 'Chat') {
              iconName = 'comments';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Bookings" component={HomeScreen} />
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation; 