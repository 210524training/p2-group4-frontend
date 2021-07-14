import React from "react";
import { Dimensions, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
export const ChartScreen: React.FC<unknown> = () => {
  const DATA = [
    {assetName:'Bobby-CM',assetTag:'1516541',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516542',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516543',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516544',deviceGroup:'IO Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516545',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516546',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516547',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
    {assetName:'Bobby-CM',assetTag:'1516548',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''}
];
const screenwidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
return(
  <View>
    <PieChart
      data={DATA}
      width={screenwidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 50]}
      
    />
  </View>
);
  }