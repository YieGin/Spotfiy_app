import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from '../Screens/Search/Search';
import Premium from '../Screens/Premium/Premium';
import Your_Libray from '../Screens/Libray/Your_Libray';

const Tab = createBottomTabNavigator();

function Bottom_Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.9)',
          height: 70,
          paddingBottom: 10,
          zIndex: 100,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Your_Libray"
        component={Your_Libray}
        options={{
          tabBarLabel: 'Your Libray',
          tabBarIcon: ({color}) => (
            <FontAwesome name="pagelines" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: ({color}) => (
            <FontAwesome name="spotify" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottom_Tabs;
