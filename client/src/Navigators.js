import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";

import InitialScreen from "./screens/InitialScreen";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  // Admin: {
  //   screen: AdminHomepage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Adminproductverif: {
  //   screen: AdminProductVerification,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Adminproductverifdetail: {
  //   screen: AdminProductVerificationDetail,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Correction: {
  //   screen: CorrectionPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Incomingpayment: {
  //   screen: IncomingPayment,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Paymentverif: {
  //   screen: PaymentVerification,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Notifpage: {
  //   screen: NotificationPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Notifdetailpage: {
  //   screen: NotificationDetailPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Cartpage:{
  //   screen: ShoppingCartPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Checkoutpage:{
  //   screen: CheckoutPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Paymentpage:{
  //   screen: PaymentPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Productdetailpage: {
  //   screen: ProductDetailPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Productdetaileditpage: {
  //   screen: ProductDetailEditPage,
  //   navigationOptions: {
  //     headerShown: false
  //   }
  // },
  // Productdetaileditform: {
  //   screen: ProductDetailEditForm,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Productpage: {
  //   screen: ProductPage,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // },
  // Productperstore: {
  //   screen: ProductPagePerStore,
  //   navigationOptions:{
  //     headerShown: false
  //   }
  // }
});

const AuthStack = createStackNavigator(
  {
    Initial: {
      screen: InitialScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRouteName: "Initial" }
);

const MainTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
    },
  },
  //   // Order: {
  //   //   screen: OrderStack,
  //   //   navigationOptions: {
  //   //     tabBarLabel: "Order",
  //   //   },
  //   // },
  //   // Profile: {
  //   //   screen: ProfileStack,
  //   //   navigationOptions: {
  //   //     tabBarLabel: "Profile",
  //   //   },
  //   // },
  // },
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let IconComponent = Ionicons;
  //       let iconName;
  //       if (routeName === "Home") {
  //         iconName = focused ? "ios-home" : "ios-home";
  //       } else if (routeName === "Order") {
  //         iconName = focused ? "ios-list-box" : "ios-list";
  //       } else if (routeName === "Profile") {
  //         iconName = focused ? "ios-person" : "ios-person";
  //       }
  //       return <IconComponent name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: "white",
  //     inactiveTintColor: "white",
  //     activeBackgroundColor: "green",
  //     inactiveBackgroundColor: "green",
  //   },
});

const RootStack = createSwitchNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Authorization: {
    screen: AuthStack,
    navigationOptions: {
      headerShown: false,
    },
  },
  Application: {
    screen: MainTabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(RootStack);
