import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const RootStack = createStackNavigator(
  { // RouteConfigs
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
  },
  {
    initialRouteName: 'Home'
  },
  {
    /* 主屏幕的标题配置现在在这里 StackNavigatorConfig */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default RootStack;