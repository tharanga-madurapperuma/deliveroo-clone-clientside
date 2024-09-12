import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity>
      <Image 
        source={{
            uri:{imgUrl},
        }}
        className="h-64 w-64 rounded-sm"
      />
      <View>
        <Text className="font-bold text-lg pt-2">{title}</Text>
      </View>
    </TouchableOpacity>
  ) 
}

export default RestaurantCard