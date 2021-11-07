import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Title extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <View style={styles.bgBlueDark}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    bgBlueDark: {
        backgroundColor: "#1597BB",
        position: "relative",
        padding: 0,
    },
    text: {
        color: "#fff",
        padding: 10,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    },
})
