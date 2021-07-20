import { PieChart } from "react-native-chart-kit"
import Asset from "../../models/asset";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers"
import asset from "../../models/asset";
import {typeOS,make} from "../../models/asset";
import { Dimensions } from "react-native";
import React, { useContext, useEffect } from "react";
import UserContext from "../../hooks/context/UserContext";
import {deviceGroup} from "../../models/asset"
import { getAsset } from "../../remote/backend.api";

interface Props {
  category:string,
  assets: Asset[],
};
export type chartType =  
{  
  category: string,//The sub-types of the sorted category
  count: number, //Total amount of single sub-types should be here
  color: string,
  legendFontColor: string,
  legendFontSize: number,
};
 const MyPieChart: React.FC<Props> = ({category}) => {
  // const [category,setCategory] = useState<string>(Props.category);
  const {assets, setAssets} = useContext(UserContext);
  const onScreenLoad = async () => {
    const res = await getAsset();
    setAssets(res);
    console.log(res);
  }

  useEffect(() => {
    onScreenLoad();
  }, [])
const chartConfig =  {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const findNumber= ():any[] => {
    const list:Array<Asset> = assets as Array<Asset>;
    console.log(assets);
    let deviceGroup:deviceGroup[] = ['Computing Device','IO Device'];
    let typeOS:typeOS[] = ['iOS','Windows 10','Windows 7','Windows 8','Linux'];
    let make:make[] = ['Dell','HP','Acer'];
    const map=new Map();

    switch(category){
      case 'deviceGroup':
        for (let i=0; i<deviceGroup.length; i++){
           map.set(deviceGroup[i],0);
        }
        break;
      case 'typeOS':
        for (let i=0; i<typeOS.length; i++){
          map.set(typeOS[i],0);
       }
        break;
      case 'make':
        for (let i=0; i<make.length; i++){
          map.set(make[i],0);
       }
    }   
    for(let i =0;i<list.length;i++){
      switch(category){
        case 'deviceGroup':
          const asset = map.get(list[i].deviceGroup);
          map.set(list[i].deviceGroup,map.get(list[i].deviceGroup)+1);
          break;
          case 'typeOS':
            map.set(list[i].deviceGroup,map.get(list[i].typeOS)+1);
            break;
          case 'make':
            map.set(list[i].model,map.get(list[i].model)+1);
            break;      
    }
  }
    const newMap = [...map]
    const mylist:chartType[] = []
    for (let i=0; i<map.size;i++){
      mylist[i] = {
        category: newMap[i][0],//The sub-types of the sorted category
        count: newMap[i][1], //Total amount of single sub-types should be here
        color: "blue",
        legendFontColor: "grey",
        legendFontSize: 15,

      }
    }
     
  return mylist as any[];

  }
  useEffect(() => {
    findNumber;
}, [])

return(
<PieChart
      data={findNumber()}
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
export default MyPieChart
