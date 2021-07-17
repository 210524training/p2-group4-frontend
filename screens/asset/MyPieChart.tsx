import React, { useState } from "react"
import { Dimensions } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers"
type Props = {
  category: string;
  
}
export const MyPieChart: React.FC = (props) => {
  const [category,setCategory] = useState<string>();
  const []
  const chartConfig =   {
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
<PieChart
      data={[
        {
          name: category,//The sub-types of the sorted category
          count: 21500000, //Total amount of single sub-types should be here
          color: 'rgba(131, 167, 234, 1)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Toronto',
          count: 2800000,
          color: '#F00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'New York',
          count: 8538000,
          color: '#ffffff',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Moscow',
          count: 11920000,
          color: 'rgb(0, 0, 255)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      ]}
      width={Dimensions.get('window').width - 16}
      height={220}
      chartConfig={
      chartConfig}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      accessor="count"//This is the label 
      backgroundColor="transparent"
      paddingLeft="15"
      absolute //For the absolute number else percentag
      />
  );
    }
