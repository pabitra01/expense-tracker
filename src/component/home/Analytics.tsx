import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    LineChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { DARK_PRIMARY_BG } from '../../colors/color';
import { H4Thin, H5Thin, H6Thin } from '../atom/Text';
import Svg, { Path } from 'react-native-svg';
const screenWidth = Dimensions.get("window").width * 0.9;

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {

        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      },
      {
        data:[0],
        color: (opacity = 1) => `rgba(0,0, 0, 0)`, // optional
        strokeWidth: 2 // optional
      },
      {
        data:[200],
        color: (opacity = 1) => `rgba(0,0, 0, 0)`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "black",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: DARK_PRIMARY_BG,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(96, 96,90, ${opacity})`,
    labelColor:()=>"rgba(255,255,255,0.4)",
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
const Analytics = () => {
  return (
    <View>
        <View style={styles.__title}>
        <H5Thin>
            <>Your Daily Analylitics
            </>
        </H5Thin>
        </View>
        {/* <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            fill="#000000"
          />
        </Svg>
        <Svg width="24" height="24" viewBox="0 0 24 24">
  <Path
    d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
    fill="#000000"
  />
</Svg> */}

      <View style={styles.__chart}>
      <LineChart
            data={data}
            width={screenWidth}
            height={256}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            bezier
        />
      </View>
    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({
    __title:{
        paddingHorizontal:30,
        paddingBottom:20
    },
    __chart:{
      paddingHorizontal:10
    }
})