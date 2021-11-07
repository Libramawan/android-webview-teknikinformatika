import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import ListFasilitas from '../components/FasilitasData'

export default function Fasilitas() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ marginBottom: 10 }}>
                    {/* Header */}
                    <Header imageUri={require('../assets/Header-fasilitas.png')}
                        header="PROFIL PRODI"
                        title="Fasilitas"
                        text="Prasarana yang disediakan bagi Program Studi Teknik Informatika yaitu 3 (tiga) gedung yang dikenal dengan sebutan Gedung Biru atau dahulu bernama Gedung PPBS. Ada 3 gedung yang digunakan yaitu Gedung A, Gedung B, dan Gedung D. Gedung A dan Gedung B digunakan untuk perkuliahan, sedangkan Gedung D digunakan untuk Laboratorium, Manajemen dan keperluan lainnya. Sarana yang disediakan adalah ruang kuliah, laboratorium, perpustakaan, sistem informasi, ruang dosen, ruang manajemen, dan fasilitas lainnya. Selain itu sebagai bagian integral dari Unpad, Program Studi Teknik Informatika dapat memanfaatkan semua fasilitas yang ada di Unpad."
                    />
                </View>
                
                <View style={{ height: 250, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Wrapper imageUri={require('../assets/fasilitas/fas1.png')}
                            name="Galeri 1"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/fas2.png')}
                            name="Galeri 2"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/fas3.png')}
                            name="Galeri 3"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/fas4.png')}
                            name="Galeri 4"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/fas5.png')}
                            name="Galeri 5"
                        />
                    </ScrollView>
                </View>

                <View style={{ marginTop: 20 }}>
                <ListFasilitas />
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
        fontWeight: "bold",
    },
    imageHeader: {
        width: "100%",
        height: 230,
    },
    bgBlueLight: {
        backgroundColor: "#8FD6E1",
        position: "relative",
    },
})
