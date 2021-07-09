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
              DirectoryScreen: 'Directory',
              AddMemoScreen: 'Memo',
            },
          },
          ViewAssets: {
            screens: {
              ViewAssetScreen: 'ViewAssets',
              EditDetail: 'EditDetail',
              ViewDetail: 'ViewDetail',
            },
          },
          AddAssets: {
            screens: {
              AddAssetScreen: 'AddAssets',
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
