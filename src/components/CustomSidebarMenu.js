import React from 'react'
import { SafeAreaView, StyleSheet, Image, View, Text } from 'react-native'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomSidebarMenu = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {/*Top Large Image */}
            <Image
                source={require("../assets/logo.jpg")}
                style={styles.sideMenuProfileIcon}
            />

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.customBackground}>
                <Text
                    style={styles.text}>
                    Copyright © 2021 by Prayudha Adhitia.{"\n"}All rights reserved.
                </Text>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 200,
        height: 100,
        borderRadius: 100 / 2,
        marginLeft: 20,
    },
    customBackground: {
        backgroundColor: "#150E56",
    },
    text:{
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
        fontFamily: "Lato-Regular",
    }
})

export default CustomSidebarMenu