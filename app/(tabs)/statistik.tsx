import React from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const charts = [
  { title: 'Ruang Tamu', data: [35, 12, 10, 10, 10, 10] },
  { title: 'Kamar Anak 1', data: [28, 10, 9, 9, 9, 9] },
  { title: 'Dapur', data: [32, 10, 11, 11, 11, 11] },
  { title: 'Kamar Anak 2', data: [28, 10, 9, 9, 9, 9] },
  { title: 'Kamar Ortu', data: [28, 10, 9, 9, 9, 9] },
];

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    stroke: '#ccc',
  },
};

const BarChartComponent = ({ title, data }: { title: string; data: number[] }) => (
  <View className="bg-white m-2 p-4 rounded-xl shadow-md">
    <Text className="text-lg font-bold mb-3 text-black">{title}</Text>
    <BarChart
      data={{
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
        datasets: [{ data }],
      }}
      width={screenWidth - 70}
      height={220}
      yAxisLabel=""
      yAxisSuffix=" kWh"
      chartConfig={chartConfig}
      fromZero
      showValuesOnTopOfBars
      style={{
        borderRadius: 16,
      }}
    />
  </View>
);

export default function StatistikPage() {
  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 py-4">
        <Text className="text-white text-lg">Statistik Penggunaan</Text>
        <View className="flex-row space-x-4">
          <Text className="text-white text-xl">📊</Text>
        </View>
      </View>

      {/* Charts */}
      <ScrollView className="flex-1 bg-white rounded-t-2xl mt-4 px-4">
        {charts.map((item, index) => (
          <BarChartComponent key={index} title={item.title} data={item.data} />
        ))}
      </ScrollView>
    </View>
  );
}
