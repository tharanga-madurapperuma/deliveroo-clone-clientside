import {Image, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/categories'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  return (
      <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center">
            <MagnifyingGlassIcon  color="gray" size={20}/>
            <TextInput
              placeholder="Restaurents and cuisines"
              keyboardType="default"
              className="rounded"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* Container */}
        <ScrollView className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* Categories */}
          <Categories />
          {/* Featured Row */}
        </ScrollView>
      </SafeAreaView>
  );
};

export default HomeScreen