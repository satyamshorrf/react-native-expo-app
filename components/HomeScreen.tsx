import React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn';
import { FontAwesome } from '@expo/vector-icons';
import BottomNavigation from './BottomNavigation';

const HomeScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      {/* Header */}
      <View style={tailwind('flex-row justify-between items-center p-4')}>  
        <Image source={require('../assets/logo.png')} style={tailwind('w-10 h-10')} />
        <View style={tailwind('flex-row items-center')}>
          <FontAwesome name="map-marker" size={24} color="black" />
          <Text style={tailwind('ml-2')}>Select Location</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={tailwind('p-4')}>
        <TextInput
          style={tailwind('border border-gray-300 rounded-full px-4 py-2')}
          placeholder="Search for services"
        />
      </View>

      {/* Category List */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tailwind('p-4')}>
        {/* Example Category */}
        <View style={tailwind('items-center mr-4')}>
          <FontAwesome name="wrench" size={24} color="black" />
          <Text>Plumbing</Text>
        </View>
        {/* Add more categories as needed */}
      </ScrollView>

      {/* Featured Services Carousel */}
      <View style={tailwind('p-4')}>
        <Text style={tailwind('text-lg font-bold')}>Featured Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Example Featured Service */}
          <View style={tailwind('mr-4')}>  
            <Image source={require('../assets/service1.png')} style={tailwind('w-40 h-40 rounded-lg')} />
            <Text>Service Name</Text>
          </View>
          {/* Add more featured services as needed */}
        </ScrollView>
      </View>

      {/* Popular Services List */}
      <View style={tailwind('p-4')}>
        <Text style={tailwind('text-lg font-bold')}>Popular Services</Text>
        {/* Example Popular Service */}
        <View style={tailwind('flex-row items-center mb-4')}>  
          <Image source={require('../assets/service2.png')} style={tailwind('w-16 h-16 rounded-lg')} />
          <Text style={tailwind('ml-4')}>Service Name</Text>
        </View>
        {/* Add more popular services as needed */}
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default HomeScreen; 