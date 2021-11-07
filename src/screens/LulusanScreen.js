import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'

export default function LulusanScreen() {
    let Karir = ([
        { list: 'a', text: 'Capacity Planning Supervisor' },
        { list: 'b', text: 'Database Administrator' },
        { list: 'c', text: 'Customer Service Supervisor' },
        { list: 'd', text: 'Data Communication Assistant manager, Data Entry Supervisor' },
        { list: 'e', text: 'Information Center Manager' },
        { list: 'f', text: 'Hardware Installation Supervisor' },
        { list: 'g', text: 'System Administrator' },
        { list: 'h', text: 'Webmaster' },
        { list: 'i', text: 'Project Manager' },
        { list: 'j', text: 'Applications' },
        { list: 'k', text: 'Project Manager Distributed Systems' },
        { list: 'l', text: 'Project Network Technical Services' },
        { list: 'm', text: 'Project Manager Implementation Deployment, dan lain-lain.' },
    ])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageUri={require('../assets/Header-lulusan.jpg')}
                    header="PROFIL PRODI"
                    title="Profil Lulusan"
                    text="Lulusan program studi TI FMIPA Unpad diarahkan dapat mengisi karir pekerjaan bidang supervisi, asisten manajer dan administrator. Sebagai contoh lulusan Teknik Informatika harus mampu menjadi"
                />

                {Karir.map((item) => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    )
                })}

                <View style={styles.center}>
                    <Text style={styles.jumlahLulusan}>Hingga update terakhir: 31 Maret 2021.{"\n"}Jumlah lulusan: 215 orang.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    center: {
        alignItems: 'center'
    },
    jumlahLulusan: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "Lato-Bold",
        fontSize: 16,
        textAlign: 'center',
    },
    list: {
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35,
        fontFamily: "Lato-Regular",
    }
})
