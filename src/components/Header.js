import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.imageHeader} source={this.props.imageUri} />

                <View style={styles.text}>
                    <Text style={styles.textHeader}>{this.props.header}</Text>
                    <Text style={styles.textTitle}>{this.props.title}</Text>
                    <Text>{this.props.text}</Text>
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
    imageHeader: {
        width: "100%",
        height: 230,
    },
    textHeader: {
        marginTop: 5,
        fontSize: 20,
        textDecorationLine: "underline",
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
    },
    textTitle: {
        marginTop: 12,
        marginBottom: 12,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
})
