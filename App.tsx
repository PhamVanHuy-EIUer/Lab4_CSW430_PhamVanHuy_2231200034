import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Contacts } from './components/Contacts';
import ProfileContact from './components/ProfileContact'
import Favorites from './components/Favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './data/Store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'; 

const Stack = createNativeStackNavigator();
function ContactScreen() {
  return (
    <Stack.Navigator
      initialRouteName='Contacts'
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Stack.Screen 
        name='Contacts'
        component={Contacts}
        options={{title: 'Contacts'}}
      />
      <Stack.Screen 
        name='ProfileContact'
        component={ProfileContact}
        options={{ title: 'Profile Contact' }}
      />
    </Stack.Navigator>
  )
}

function FavoriteScreen () {
  return (
    <Stack.Navigator
      initialRouteName='Favorites'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Favorites' component={Favorites} options={{title: 'Favorites'}}/>
      <Stack.Screen name='ProfileContact' component={ProfileContact} options={{title: 'Profile Contact'}}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Contacts'
      
    >
      <Tab.Screen name='Contacts' component={ContactScreen}  
      options={{
        tabBarIcon: ({ color, size }) => (
              <Icon source="format-list-bulleted" size={size} color={color} />
            ),
        headerShown: false
      }}
      />
      <Tab.Screen name='Favorites' component={FavoriteScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
              <Icon source="star" size={size} color={color} />
            ),
            headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator initialRouteName='Contacts'>
      <Drawer.Screen name='Contacts' component={ContactScreen}  
      options={{
        drawerIcon: ({ color, size }) => (
              <Icon source="format-list-bulleted" size={size} color={color} />
            ),
      }}/>
      <Drawer.Screen name='Favorites' component={FavoriteScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
              <Icon source="star" size={size} color={color} />
            ),
        }}/>
    </Drawer.Navigator>
  )
}

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator/>
        {/* <DrawerNavigator/> */}
      </NavigationContainer>
    </Provider>
  )
}