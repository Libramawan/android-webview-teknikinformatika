import React from 'react'
import { Text, View, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { createOpenLink } from 'react-native-open-maps'


const location = { latitude: -6.923883961262845, longitude: 107.77384700455825 };
const openLocation = createOpenLink(location);
const openLocationZoomedOut = createOpenLink({ ...location, zoom: 20 });

export default function Home({ navigation }) {
    return (
        <View>
            <ScrollView>
                {/* Header */}
                <View style={styles.containerHeader}>

                    <ImageBackground source={require('../assets/Header-home.jpg')} style={{ width: '100%' }}>

                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 350, justifyContent: "center" }}>
                            <View style={styles.titleBackground}>
                                <Text style={styles.title}>S-1 INFORMATIKA UNPAD</Text>
                            </View>
                        </View>

                    </ImageBackground>
                </View>
                <View style={styles.bgBlueDark}>
                    <Text style={styles.subTitle}>SELAMAT DATANG DI APLIKASI{"\n"}PROGRAM STUDI TEKNIK INFORMATIKA</Text>
                </View>

                {/* Tentang Prodi */}
                <ScrollView style={styles.containerText}>
                    <View>
                        <Text style={styles.h1}>TENTANG PRODI</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={Object.assign({}, styles.text)}>
                            Program Studi Teknik Informatika (TI) FMIPA Unpad bertujuan menghasilkan lulusan yang mampu menyerap, mengaplikasikan, dan mengembangkan TI dengan kompetensi utama Rekayasa Perangkat Lunak, meliputi 4 peminatan studi yaitu Sistem Informasi, Jaringan Komputer dan Komunikasi Data, Sistem Cerdas dan Grafika Komputer, serta Komputasi dan Metode Numerik.
                            {"\n\n"}
                            Lulusan TI FMIPA Unpad diharapkan mampu mengembangkan perangkat lunak untuk berbagai keperluan, melakukan analisis terhadap sistem dalam suatu instansi, membuat solusi yang integratif dengan memanfaatkan perangkat lunak, mampu merencanakan dan mengevaluasi penerapan TI pada sebuah organisasi, mampu merancang dan memelihara basis data termasuk data warehouse untuk suatu instansi atau perusahaan, mampu melakukan pengujian fungsi-fungsi perangkat lunak, mampu mengembangkan, merancang dan membangun serta memelihara website dengan berbagai layanan dan fasilitasnya.
                        </Text>
                    </View>

                    <View style={{ marginTop: 50 }}>
                        <Text style={Object.assign({ textAlign: "center" }, styles.text)}>Akreditasi: A{"\n"}Gelar Lulusan: Sarjana Komputer (S.Kom.)</Text>
                    </View>
                </ScrollView>

                {/* Visi */}
                <View style={styles.bgBlueDark}>
                    <Text style={styles.subTitle}>Visi</Text>
                </View>
                <View style={styles.bgBlueLight}>
                    <Text style={styles.text, styles.containerText}>Pada tahun 2020, menjadi Prodi S-1 Teknik Informatika yang unggul di tingkat nasional serta diakui di tingkat regional ASEAN dalam bidang pendidikan, penelitian, dan pengabdian kepada masyarakat.</Text>
                </View>

                {/* Misi */}
                <View style={styles.bgBlueDark}>
                    <Text style={styles.subTitle}>Misi</Text>
                </View>
                <View style={styles.bgBlueLight}>
                    <Text style={Object.assign({}, styles.text, styles.containerText)}>
                        1. Menghasilkan lulusan yang bermutu, bermoral, dan profesional dalam bidang Teknik informatika serta mampu beradaptasi terhadap perkembangan ilmu pengetahuan dan teknologi sesuai dengan kebutuhan masyarakat, sehingga dapat bersaing secara nasional dan regional ASEAN.
                        {"\n\n"} 2. Meningkatkan pemberdayaan kelompok bidang keahlian "(KBK)" dalam pengembangan penelitian, difokuskan pada penciri atau kekhasan Prodi S-1 Teknik Informatika Departemen Ilmu Komputer FMIPA Unpad yaitu penerapan Informatika dalam bidang Bisnis, Komunikasi, Budaya dan Lingkungan sesuai perkembangan ilmu pengetahuan dan teknologi serta kebutuhan masyarakat, yang bertaraf nasional dan regional ASEAN.
                        {"\n\n"} 3. Meningkatkan penerapan hasil penelitian difokuskan pada penciri atau kekhasan Prodi S-1 Teknik Informatika Departemen Ilmu Komputer FMIPA Unpad untuk ikut serta dalam mendukung pembangunan nasional dan kesejahteraan masyarakat.
                    </Text>
                </View>

                {/* Tujuan */}
                <ScrollView style={styles.containerText}>
                    <View>
                        <Text style={Object.assign({ textAlign: "center", fontFamily: "Poppins-Regular" }, styles.h1)}>Tujuan Pendidikan</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>
                            Tujuan Pendidikan Program Studi Teknik Informatika Universitas Padjadjaran adalah menghasilkan lulusan yang mampu menyerap, mengaplikasikan dan mengembangkan Teknologi informasi dengan kompetensi utama Rekayasa Perangkat Lunak, meliputi 4 peminatan studi yaitu :
                            {"\n\n"}
                            1. Ilmu Komputasi dan Metode Numerik
                            {"\n"}2. Sistem Informasi dan Sistem Multimedia
                            {"\n"}3. Sistem Cerdas dan Sistem Grafika
                            {"\n"}4. Jaringan Komputer dan Komunikasi Data
                        </Text>
                    </View>
                </ScrollView>

                {/* Cards */}
                <View style={styles.cards}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Struktur Organisasi')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Struktur Organisasi</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-struktur.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Info Staf Prodi')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Pejabat dan Staf Prodi</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-staf.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Fasilitas')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Fasilitas</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-fasilitas.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Daftar Kurikulum Prodi')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Kurikulum</Text>
                            <Text style={styles.cardSubTitle}>Daftar Kurikulum Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-kurikulum.jpg')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Profil Lulusan')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Profil Lulusan</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-lulusan.jpg')} />
                    </TouchableOpacity>
                </View>

                {/* Kontak dan Lokasi */}
                <View style={styles.contact}>
                    <View style={styles.containerText}>
                        <Text style={styles.h1White}>Lokasi</Text>
                        <Text style={Object.assign({ fontFamily: "Lato-Regular", }, styles.white)}>Kampus UNPAD Jatinangor Jalan Raya Bandung-Sumedang KM21 Jatinangor, 45363 Gedung Ilmu Komputer "(Gedung A PPBS)"
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={openLocationZoomedOut}>
                            <Image style={{ width: 233, height: 233 }} source={require('../assets/Lokasi.jpg')} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.containerText}>
                        <Text style={styles.h1White}>Kontak</Text>
                        <Text style={Object.assign({ fontFamily: "Lato-Regular", }, styles.white)}>
                            Telp: 6222-7798983
                                {"\n"}Fax: 6222-7794545
                                {"\n"}Email: informatika@unpad.ac.id
                                {"\n"}Website: informatika.unpad.ac.id
                            </Text>
                    </View>

                </View>

            </ScrollView >
        </View>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        flexDirection: "column",
        height: 350,
        alignItems: "center",
    },
    containerText: {
        flex: 1,
        padding: 20,
    },
    titleBackground: {
        backgroundColor: "#150E56",
        height: 50,
        width: "70%",
        marginRight: 0,
        marginLeft: "auto",
    },
    title: {
        color: "#fff",
        padding: 14,
        fontSize: 18,
        textAlign: "center",
        fontFamily: "Lato-Regular",
    },
    bgBlueLight: {
        backgroundColor: "#8FD6E1",
        position: "relative",
    },
    bgBlueDark: {
        backgroundColor: "#1597BB",
        position: "relative",
    },
    subTitle: {
        color: "#fff",
        padding: 10,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    },
    h1: {
        fontSize: 20,
        fontFamily: "Poppins-Regular"
    },
    text: {
        fontSize: 15,
        fontFamily: "Lato-Regular",
    },
    cards: {
        alignItems: 'center',
        backgroundColor: "#F6F6F6",
        marginBottom: 15,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 10,
        width: "90%",
        justifyContent: 'space-between',
        borderWidth: 1,
    },
    cardItems: {
        padding: 15,
    },
    cardTitle: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
    },
    cardSubTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    cardImage: {
        width: 90,
        height: 90,
    },
    contact: {
        backgroundColor: "#150E56",
    },
    h1White: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Poppins-Regular",
    },
    white: {
        color: "#fff",
    },
    footer: {
        backgroundColor: "#000",
        alignItems: "center",
    }
})