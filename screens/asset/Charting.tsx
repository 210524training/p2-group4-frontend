import React, { ReactNode, useState } from "react";
import { Dimensions, View, Text, ScrollView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import MyPieChart from "./MyPieChart";
import { styles } from "../../styles";
import Asset from "../../models/asset";
import { getAsset } from "../../remote/backend.api";

export const ChartScreen: React.FC<unknown>= () => {
//   const DATA = [
//     {assetName:'Bobby-CM',assetTag:'1516541',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516542',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516543',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516544',deviceGroup:'IO Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516545',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516546',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516547',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
//     {assetName:'Bobby-CM',assetTag:'1516548',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''}
// ];
  const [data, setData] = useState<Asset[]>();
  const handle = async() =>  {
<<<<<<< HEAD
     
=======
     setData(await getAsset() as Asset[]);
>>>>>>> 1f90d5e (Implementing axios into charting)
  }

// const screenwidth = ;
// const screenheight = Dimensions.get('window').height;


return (
  
    <>
    <ScrollView>
      <View>
      
<<<<<<< HEAD
      <MyPieChart  category='deviceGroup'/>
      <MyPieChart  category='make'/>
      <MyPieChart  category='typeOS'/>
=======
      <MyPieChart assets={data as Asset[]} category='devicegroup'/>
      <MyPieChart assets={data as Asset[]} category='make'/>
      <MyPieChart assets={data as Asset[]} category='typeOS'/>
>>>>>>> 1f90d5e (Implementing axios into charting)
      </View>
    </ScrollView>
    </>  
);
    }
