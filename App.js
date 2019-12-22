import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import SearchScreen from "./src/screens/searchScreen"
import RestaurantScreen from "./src/screens/restaurantScreen"


const navigator = createStackNavigator({
  Search : SearchScreen,
  Restaurant : RestaurantScreen

},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Foodgasm'
  }
})

export default createAppContainer(navigator);
