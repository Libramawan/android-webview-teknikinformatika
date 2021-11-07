import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Wrapper extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={{ flex: 5 }}>
                    <Image source={this.props.imageUri}
                        style={styles.image}
                    />
                </View>
                <View style={styles.text}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        width: 360,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 0.5,
        borderColor: "#ddd"
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover"
    },
    text: {
        flex: 1,
        alignItems: "center",
        marginTop: 10,
    }
})
