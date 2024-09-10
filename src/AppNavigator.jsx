import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Menu from './screens/Menu';
import Slide from './screens/Slide';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Slide" component={Slide} />
        <Stack.Screen name="Splash" component={Splash}  options={{ unmountOnBlur: true }}/>
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
  );
}

export default AppNavigator;
