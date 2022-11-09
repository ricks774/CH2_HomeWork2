import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Easing } from 'react-native';
// Tab navigation套件
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// icon套件
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SettingsDetailScreen from './src/screens/SettingsDetailScreen'

// 全域變數
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack開啟換頁時動畫設定
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
// Stack關閉換頁時動畫設定
const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear
  }
}


function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='MainPage'
      screenOptions={{
        headerStyle: { backgroundColor: '#f4f4f4' },
        headerBackTitle: '返回',
        headerTintColor: '#3D5478',
        gestureEnabled: true,   // 開啟滑動手勢 android默認是false
        gestureDirection: 'vertical',   // 滑動手勢方向
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,  // 畫面從下方往上出現
        presentation: 'transparentModal',   // 彈出頁面可以透明看到上一層
        // cardOverlayEnabled:'true'   // 讓背景有陰影
        HeaderStyleInterpolators: 'forStatic',
        transitionSpec: {
          open: config,
          close: closeConfig
        }
      }}
    >
      <Stack.Screen name="HomePage" component={HomeScreen} options={{ title: '寶貝日誌' }} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen}
        options={{
          title: '餵奶紀錄',
          headerShown: false  // headerShown是否要顯示上方狀態名稱
        }} />
    </Stack.Navigator>
  )
}

function MySettingStack() {
  return (
    <Stack.Navigator
      initialRouteName='MainPage'
      screenOptions={{
        headerStyle: { backgroundColor: '#f4f4f4' },
        headerBackTitle: '返回',
        headerTintColor: '#3D5478',
        gestureEnabled: true,   // 開啟滑動手勢 android默認是false
        gestureDirection: 'vertical',   // 滑動手勢方向
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,  // 畫面從下方往上出現
        presentation: 'transparentModal',   // 彈出頁面可以透明看到上一層
        // cardOverlayEnabled:'true'   // 讓背景有陰影
        HeaderStyleInterpolators: 'forStatic',
        transitionSpec: {
          open: config,
          close: closeConfig
        }
      }}
    >
      <Stack.Screen name="SettingPage" component={SettingsScreen} options={{ title: '寶貝一覽' }} />
      <Stack.Screen name="SettingsDetailScreen" component={SettingsDetailScreen}
        options={{
          title: '個人資料',
          headerShown: false  // headerShown是否要顯示上方狀態名稱
        }} />
    </Stack.Navigator>
  )
}


export default function App() {

  return (
    <NavigationContainer style={{display:'none'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return <Image source={require('./src/icon/home.png')} style={{ width: 30, height: 30 }} />
            } else if (route.name === 'Settings') {
              return <Image source={require('./src/icon/settings.png')} style={{ width: 30, height: 30 }} />
            }
          },
          tabBarActiveTintColor: 'tomato',  // icon點選時的顏色
          tabBarInactiveTintColor: 'gray',  // icon未點選時的顏色
          headerShown: false,  // 不顯示header
          tabBarShowLabel: false,   // 不顯示文字標籤
          tabBarStyle: styles.btm_navbar,
        })}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Settings" component={MySettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btm_navbar: {
    position: 'absolute',
    height: 60,
    backgroundColor: '#68AEA0',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // display: 'none'
  }
});
