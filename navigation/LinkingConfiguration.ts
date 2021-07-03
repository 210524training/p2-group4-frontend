/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          ViewAssets: {
            screens: {
              ViewAssetsScreen: 'view assets',
            },
          },
          AddAssets: {
            screens: {
              AddAssetsScreen: 'add assets',
            },
          },
          Charts: {
            screens: {
              ChartScreen: 'charts',
            },
          },
          Profile: {
            screens: {
              LoginScreen: 'login',
              RegisterScreen: 'register'
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
