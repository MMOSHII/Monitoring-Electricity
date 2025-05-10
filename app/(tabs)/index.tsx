import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const rooms = [
  { title: 'Kamar Anak 1', usage: 20.2 },
  { title: 'Ruang Tamu', usage: 38.7 },
  { title: 'Kamar Anak 2', usage: 20.2 },
  { title: 'Dapur', usage: 38.7 },
  { title: 'Kamar Ortu', usage: 20.2 },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 py-4">
        <Text className="text-white text-lg">Hello User</Text>
        <View className="flex-row space-x-4">
          <Text className="text-white text-xl">⚙️</Text>
          <Text className="text-white text-xl">🔊</Text>
        </View>
      </View>

      {/* Usage Info */}
      <View className="items-center mt-4">
        <Text className="text-white text-base">Total Usage Power</Text>
        <Text className="text-white text-4xl font-bold">
          ⚡ 287.89 <Text className="text-2xl">kWh</Text>
        </Text>
      </View>

      {/* Room Cards */}
      <ScrollView
        className="flex-1 bg-white rounded-t-2xl mt-6"
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingVertical: 20,
        }}
      >
        {rooms.map((room, index) => (
          <TouchableOpacity
            key={index}
            className="w-48 h-48 bg-black m-2 rounded-xl items-center justify-center"
          >
            <Text className="text-white text-xl">⚡</Text>
            <Text className="text-white text-">{room.usage} kWh</Text>
            <Text className="text-white text-xl mt-1">{room.title}</Text>
          </TouchableOpacity>
        ))}

        {/* Add Button */}
        <TouchableOpacity className="w-48 h-48 bg-black m-2 rounded-xl items-center justify-center">
          <View className="bg-white w-9 h-9 rounded-full items-center justify-center mb-1">
            <Text className="text-black text-xl">+</Text>
          </View>
          <Text className="text-white text-xl">Tambah</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
