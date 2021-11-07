import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import Title from '../components/Title'

export default function KurikulumScreen() {
    let Minat = ([
        { list: '1', text: 'Minat Ilmu Komputasi dan Metode Numerik' },
        { list: '2', text: 'Minat Sistem Informasi dan Sistem Multimedia (sebelumnya Minat Sistem Informasi Rekayasa Perangkat Lunak)' },
        { list: '3', text: 'Minat Sistem Cerdas dan Sistem Grafika, dan' },
        { list: '4', text: 'Minat Jaringan Komputer dan Komunikasi Data. Setiap peminatan mahasiswa dapat memilih 2 mata kuliah wajib pada peminatan (wajib peminatan) dan 1 mata kuliah pilihan bebas' },
    ])


    return (
        <ScrollView>

            <View style={styles.container}>
                <Header imageUri={require('../assets/Header-kurikulum.jpg')}
                    header="DAFTAR KURIKULUM PRODI"
                    title="Kurikulum"
                    text="Kurikulum Program Studi Teknik Informatika Universitas Padjadjaran disusun dengan fokus yang terletak pada teori, riset dan penerapan di bidang Teknik Informatika, bidang ilmu lainnya serta masyarakat dan industri serta merujuk kepada perkembangan teknologi terkini dalam bidang ilmu komputer dan informatika. Informasi tertulis dapat dilihat pada buku pedoman akademik program studi."
                />
            </View>

            <Title title="Informasi dan Rujukan Teknis" />

            <View>
                <Text style={styles.text}>a. Beban studi minimal 144 SKS yang dapat diselesaikan dalam waktu 8 semester. {"\n\n"} b. Computing Curricula 2005 dari ACM dan IEEE serta Turunannya.</Text>
            </View>

            <View>
                <Text style={Object.assign({}, styles.bold, styles.center)}>
                    Bidang Peminatan
                </Text>


                <Text style={styles.text}>
                    Mahasiswa program studi S-1 Teknik Informatika mengambil mata kuliah secara bersama sampai dengan semester 4. Mulai Semester 5 mahasiswa bisa memilih kuliah-kuliah sesuai dengan minatnya. Saat ini tersedia 4 bidang peminatan yaitu:
                </Text>


                <View style={{ marginBottom: 20 }}>
                    {Minat.map((item) => {
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
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    bold: {
        fontFamily: "Lato-Bold",
    },
    center: {
        textAlign: "center"
    },
    list: {
        flexDirection: "row",
        marginLeft: 35,
        marginRight: 35,
        fontFamily: "Lato-Regular",
    },
    button: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        width: "50%",
        alignItems: 'center'
    }
})
