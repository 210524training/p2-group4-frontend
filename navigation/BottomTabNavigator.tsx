import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import Colors from '../constants/Colors';
import UserContext from '../hooks/context/UserContext';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/profile/LoginScreen';
import RegisterScreen from '../screens/profile/RegisterScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import NHomeScreen from '../screens/home/NotLoggedIn';
import { HomeParamList, BottomTabParamList, ViewAssetParamList, ProfileParamList, ChartParamList, AddAssetParamList } from '../types';
import AddAssetScreen from '../screens/asset/AddAsset';
import AddAssetPage from '../pages/AddAssetPage';
import EditDetailPage from '../pages/EditDetailPage';
import DetailScreen from '../screens/asset/DetailScreen';
import DirectoryScreen from '../screens/directory/DirectoryScreen';
import HomeScreen from '../screens/home/AfterLoggedIn';
import AddMemoScreen from '../screens/memo/AddMemo';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { user, authenticated } = useContext(UserContext);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      { authenticated &&
        <>
        <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="ViewAsset"
          component={ViewAssetNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-albums-sharp" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="AddAsset"
          component={AddAssetNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-duplicate-sharp" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Chart"
          component={ChartNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-bar-chart-sharp" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-circle" color={color} />,
          }}
        />
      </>
      }
      { !authenticated &&
        <>
          <BottomTab.Screen
          name="Home"
          component={NHomeNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
          />
          <BottomTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-circle" color={color} />,
          }}
          />
        </>
      }
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const ProfileStack = createStackNavigator<ProfileParamList>();
function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Login-In' }}
      />
      <ProfileStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerTitle: 'Register' }}
      />
    </ProfileStack.Navigator>
  );
}

const ChartStack = createStackNavigator<ChartParamList>();
function ChartNavigator() {
  return (
    <ChartStack.Navigator>
      <ChartStack.Screen
        name="ChartScreen"
        component={TabTwoScreen} // TODO: add chart screen
        options={{ headerTitle: 'Chart' }}
      />
    </ChartStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen} 
        options={{ headerTitle: 'Home' }}
      />
      <HomeStack.Screen
        name="DirectoryScreen"
        component={DirectoryScreen} 
        options={{ headerTitle: 'Directory' }}
      />
      <HomeStack.Screen
        name="AddMemoScreen"
        component={AddMemoScreen} 
        options={{ headerTitle: 'Post Memo' }}
      />
    </HomeStack.Navigator>
  );
}

const NHomeStack = createStackNavigator<HomeParamList>();
function NHomeNavigator() {
  return (
    <NHomeStack.Navigator>
      <NHomeStack.Screen
        name="NHomeScreen"
        component={NHomeScreen} 
        options={{ headerTitle: 'Home' }}
      />
      <NHomeStack.Screen
        name="DirectoryScreen"
        component={DirectoryScreen} 
        options={{ headerTitle: 'Directory' }}
      />
    </NHomeStack.Navigator>
  );
}

const AddAssetStack = createStackNavigator<AddAssetParamList>();
function AddAssetNavigator() {
  return (
    <AddAssetStack.Navigator>
      <AddAssetStack.Screen
        name="AddAssetScreen"
        component={AddAssetPage} // TODO: add asset screen
        options={{ headerTitle: 'Add Asset' }}
      />
    </AddAssetStack.Navigator>
  );
}

const ViewAssetStack = createStackNavigator<ViewAssetParamList>();
function ViewAssetNavigator() {
  return (
    <ViewAssetStack.Navigator>
      <ViewAssetStack.Screen
        name="ViewAssetScreen"
        component={TabTwoScreen} // TODO: add asset screen
        options={{ headerTitle: 'View Asset' }}
      />
      <ViewAssetStack.Screen
        name="EditDetail"
        component={EditDetailPage} 
        options={{ headerTitle: 'Edit Detail' }}
      />
      <ViewAssetStack.Screen
        name="ViewDetail"
        component={DetailScreen} 
        options={{ headerTitle: 'Asset Detail' }}
      />
    </ViewAssetStack.Navigator>
  );
}
