import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/HomeScreen'
import { StafScreen, DetailsScreen } from './src/screens/StafScreen'
import FasilitasScreen from './src/screens/FasilitasScreen'
import LulusanScreen from './src/screens/LulusanScreen'
import KurikulumScreen from './src/screens/KurikulumScreen'
import StrukturScreen from './src/screens/StrukturScreen'


import KurikulumWajib from './src/components/MatkulWajib'
import KurikulumMinat from './src/components/MatkulMinat'

import CustomSidebarMenu from './src/components/CustomSidebarMenu';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tabs = createBottomTabNavigator()

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={toggleDrawer}>
                {/*Hamburger Button Image */}
                <Image
                    source={require("./src/assets/drawerWhite.png")}
                    style={{ width: 30, height: 30, marginLeft: 15 }}
                />
            </TouchableOpacity>
        </View>
    )
}

function DrawerRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
                drawerContentOptions={{
                    activeTintColor: '#150E56',
                    itemStyle: { marginVertical: 5 },
                }}
                drawerContent={(props) => <CustomSidebarMenu {...props} />}>
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Struktur Organisasi" component={StrukturStack} />
                <Drawer.Screen name="Info Staf Prodi" component={StafStack} />
                <Drawer.Screen name="Fasilitas" component={FasilitasStack} />
                <Drawer.Screen name="Profil Lulusan" component={LulusanStack} />
                <Drawer.Screen name="Daftar Kurikulum Prodi" component={KurikulumStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#7B113A', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontFamily: "Lato-Bold", //Set Header text style
                },

            }}>
            <Stack.Screen name="TI UNPAD" component={Home} />
        </Stack.Navigator>
    )
}

function StafStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Staf Prodi" component={StafScreen}
                options={{
                    headerLeft: () => (
                        <NavigationDrawerStructure navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#7B113A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontFamily: "Lato-Bold", //Set Header text style
                    },

                }}>
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#7B113A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontFamily: "Lato-Bold", //Set Header text style
                    },

                }}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

function FasilitasStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#7B113A', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontFamily: "Lato-Bold", //Set Header text style
                },

            }}>
            <Stack.Screen name="Fasilitas" component={FasilitasScreen} />
        </Stack.Navigator>
    )
}

function LulusanStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#7B113A', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontFamily: "Lato-Bold", //Set Header text style
                },

            }}>
            <Stack.Screen name="Profil Lulusan" component={LulusanScreen} />
        </Stack.Navigator>
    )
}

function KurikulumStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#7B113A', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontFamily: "Lato-Bold", //Set Header text style
                },

            }}>
            <Stack.Screen name="Kurikulum" component={KurikulumTabs} />
        </Stack.Navigator>
    )
}
function StrukturStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#7B113A', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontFamily: "Lato-Bold", //Set Header text style
                },

            }}>
            <Stack.Screen name="Struktur Organisasi" component={StrukturScreen} />
        </Stack.Navigator>
    )
}

function KurikulumTabs() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Kurikulum') {
                        iconName = focused
                            ? 'info'
                            : 'info-circle';
                    } else if (route.name === 'Matkul Wajib') {
                        iconName = focused ? 'list' : 'list';
                    }
                    else {
                        iconName = focused ? 'list' : 'list';
                    }

                    return <Icons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tabs.Screen name="Kurikulum" component={KurikulumScreen} />
            <Tabs.Screen name="Matkul Wajib" component={KurikulumWajib} />
            <Tabs.Screen name="Matkul Minat" component={KurikulumMinat} />
        </Tabs.Navigator>
    )
}

export default DrawerRoutes