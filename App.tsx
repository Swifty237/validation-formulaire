import { appType } from "./components/Interfaces"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import RegistrationScreen from "./screens/RegistrationScreen"
import RContinuationScreen from "./screens/RContinuationScreen"



const { Navigator, Screen } = createNativeStackNavigator<appType>()

// Construction de la navigation

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="HomeScreen">
        <Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Screen name="LoginScreen" component={LoginScreen} options={{ title: "Login", headerTitleAlign: "center" }} />
        <Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: "Inscription", headerTitleAlign: "center" }} />
        <Screen name="RContinuationScreen" component={RContinuationScreen} options={{ title: "Inscription", headerTitleAlign: "center" }} />
      </Navigator>
    </NavigationContainer>
  )
} 
