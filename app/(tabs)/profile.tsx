import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function ProfileScreen() {
  const menuItems = [
    'Pengaturan',
    'Download Histori',
    'Saran & Kritik',
    'Tips Menghemat Listrik',
  ];

  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="flex-row justify-end p-4">
        <Text className="text-white text-xl">📶</Text>
      </View>

      {/* Profile Info */}
      <View className="items-center mb-6">
        <View className="w-24 h-24 rounded-full bg-gray-300" />
        <Text className="text-white text-xl mt-4">Username</Text>
      </View>

      {/* Menu Items */}
      <ScrollView className="bg-white rounded-t-2xl pt-4">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="border-t border-gray-300 py-4 px-5"
            activeOpacity={0.7}
          >
            <Text className="text-black text-base">{item}</Text>
          </TouchableOpacity>
        ))}
        {/* Spacer for bottom nav */}
        <View className="h-20" />
      </ScrollView>
    </View>
  );
}
