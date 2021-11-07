import React from 'react'
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/Header'
import Title from '../components/Title'

export function StafScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ marginBottom: 10 }}>
                    {/* Header */}
                    <Header imageUri={require('../assets/Header-staf.png')}
                        header="PROFIL PRODI"
                        title="Sumber Daya Manusia"
                        text="Sumber daya manusia di Departemen Ilmu Komputer terdiri dari 15 tenaga pendidik dan 5 tenaga kependidikan dan 1 petugas kebersihan. Semua dosen sudah memiliki sertifikat dosen dan sebagian memiliki Sertifikasi kompetensi profesional."
                    />
                </View>


                {/* Dosen */}

                <Title title="Staf Pengajar (Tenaga Pendidik)" />

                <Text style={styles.text}>Staf pengajar Program Studi Teknik Informatika Departemen Ilmu Komputer FMIPA Universitas Padjadjaran adalah dosen profesional dan memiliki latar belakang pendidikan dari dalam dan luar negeri serta berpengalaman, selain mengajar program S-1 Teknik Informatika, juga besar pernah mendirikan dan mengelola serta mengajar pada program Sarjana Matematika Bidang Minat Ilmu Komputer, Program Diploma 3 dan Diploma 4 Komputer/Informatika, dan Program S-1 Ekstensi Ilmu Komputer Universitas Padjadjaran sejak tahun 1993. </Text>
                <Text style={styles.text}>Selain dosen tetap, kami juga didukung oleh staf pengajar lain di luar program studi dalam bidang Matematika, Statistika, Riset Operasi, Teknik Industri, Fisika, dan Elektronika, yang ada di Lingkungan Unpad. Proses Perkuliahan juga akan melibatkan kerjasama dengan stakeholder dan alumni yang berpengalaman bergerak dalam bidang Teknologi Informasi, baik di industri pemerintah, perusahaan swasta maupun industri.</Text>


                <View style={styles.bgBlueLight}>
                    <View style={{ backgroundColor: "#150E56" }}>
                        <Text style={styles.subTitle}>Tenaga Pendidik{"\n"}Teknik Informatika Unpad</Text>
                    </View>
                    {dosen.map((item) => {
                        return (
                            <View key={item.key} style={styles.text}>
                                <Image source={images.initials[item.initial]} style={{ width: "100%", height: 400 }} />
                                <Button onPress={() => navigation.navigate('Details', item)} title={item.name} />
                            </View>
                        )
                    })}

                </View>

                {/* Tendik */}
                <View style={{ marginTop: 20 }}>
                    <Title title="Staf Pengajar (Tenaga Pendidik)" />
                </View>

                <Text style={styles.text}>Tenaga kependidikan memiliki keahlian dalam bidang administrasi, kesekretariatan, teknisi, laboran, operator dan pustakawan. Saat ini Departemen Ilmu Komputer memiliki 5 tenaga kependidikan yang profesional dan berkualitas mendukung kelancaran kegiatan Departemen Ilmu Komputer, Program Studi S-1 Teknik Informatika, serta Laboratorium-laboratorium yang ada. Proses administrasi dan manajemen pendidikan program studi dibantu juga oleh tenaga kependidikan dari fakultas MIPA dan juga dari Universitas Padjadjaran. Dalam hal peningkatan kompetensi tenaga kependidikan juga aktif mengikuti beberapa kegiatan yang relevan dalam meningkatkan keahliannya.</Text>

                <View style={styles.bgBlueLight}>
                    <View style={{ backgroundColor: "#150E56" }}>
                        <Text style={styles.subTitle}>Tenaga Kependidikan{"\n"}Teknik Informatika Unpad</Text>
                    </View>
                    {tendik.map((item) => {
                        return (
                            <View key={item.key} style={styles.text}>
                                <Image source={images.initials[item.initial]} style={{ width: "100%", height: 400 }} />
                                <Button onPress={() => navigation.navigate('Details', item)} title={item.name} />
                            </View>
                        )
                    })}
                </View>
            </View>

        </ScrollView >
    )
}

export function DetailsScreen({ route }) {
    // console.warn(route)
    let data = route.params

    return (
        <ScrollView>
            <View>
                <Image source={images.initials[data.initial]} style={{ width: "100%", height: 400 }} />
                <View style={{ backgroundColor: "#150E56" }}>
                    <Text style={{ color: "#fff", padding: 12, fontSize: 16 }}>{data.divisi}</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text>Nama:</Text>
                    <Text>{data.name}{"\n"}</Text>
                    <Text>Pendidikan:</Text>
                    <Text>{data.pendidikan}{"\n"}</Text>
                    <Text>Bidang:</Text>
                    <Text>{data.bidang}{"\n"}</Text>
                    <Text>Email:</Text>
                    <Text>{data.email}{"\n"}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

let dosen = ([
    { divisi: 'Tenaga Pendidik', name: 'Prof.Dr.Atje Setiawan A., M.S, M.Kom.', pendidikan: "S3: Ilmu Komputer UGM, S2: Ilmu Komputer UGM, S2: Teknik Industri ITB, S1: Matematika UNPAD", bidang: "Data Mining, Decision Support Systems, Knowledge Engineering", email: "atje.setiawan@unpad.ac.id", initial: 1, key: 'dosen1' },
    { divisi: 'Tenaga Pendidik', name: 'Dr. Setiawan Hadi, M.Sc.CS.', pendidikan: "D-3 PAT-JPK ITB, S-1 Unpad, S-2 UNB Canada, S-3 ITB", bidang: "Computer Vision, Image Processing, Computer Graphics and Visualization", email: "setiawanhadi@unpad.ac.id", initial: 2, key: 'dosen2' },
    { divisi: 'Tenaga Pendidik', name: 'Drs. Akik Hidayat, M.Kom.', pendidikan: "S2: Ilmu Komputer UGM, S1: Matematika UNPAD", bidang: "Computational Mathematics, Cryptography", email: "akik.hidayat@unpad.ac.id", initial: 3, key: 'dosen3' },
    { divisi: 'Tenaga Pendidik', name: 'Dr. Juli Rejito, M.Kom.', pendidikan: "S3: Ilmu Komputer UGM, S2: Ilmu Komputer UGM, S1: Matematika UNPAD", bidang: "Database, Image Retrieval, Knowledge Engineering", email: "juli.rejito@unpad.ac.id", initial: 4, key: 'dosen4' },
    { divisi: 'Tenaga Pendidik', name: 'Dr. Asep Sholahuddin, M.T.', pendidikan: "S3: MIPA Unpad Bidang Minat Ilmu Komputer, S2: Informatika ITB, S1: Matematika UNPAD", bidang: "Robotics, Artificial Intelligence, Microcontroller", email: "asep.sholahuddin@unpad.ac.id", initial: 5, key: 'dosen5' },
    { divisi: 'Tenaga Pendidik', name: 'Drs. Ino Suryana, M.Kom.', pendidikan: "S2: Ilmu Komputer UI, S1: Matematika UNPAD", bidang: "Computational Mathematics, High Performance Computing, Computer Architecture", email: "", initial: 6, key: 'dosen6' },
    { divisi: 'Tenaga Pendidik', name: 'Drs. R. Sudrajat, M.Kom.', pendidikan: "S2: Ilmu Komputer IPB, S1: Matematika UNPAD", bidang: "Algorithms Optimization, Database, Bioinformatics", email: "r_sudrajat@unpad.ac.id", initial: 7, key: 'dosen7' },
    { divisi: 'Tenaga Pendidik', name: 'Akmal, S.Si., M.T.', pendidikan: "S3: ITB (sedang studi lanjut), S2: Informatika ITB, S1: Matematika UNPAD", bidang: "Graph and Combinatorics, Data Structure, Operating System", email: "akmal@unpad.ac.id", initial: 8, key: 'dosen8' },
    { divisi: 'Tenaga Pendidik', name: 'Erick Paulus, S.Si., M.Kom.', pendidikan: "S2: Ilmu Komputer UGM, S1: Matematika UNPAD", bidang: "Virtual/Augmented Reality, Image Processing, Cloud Computing, Mathematics Programming", email: "erick.paulus@unpad.ac.id", initial: 9, key: 'dosen9' },
    { divisi: 'Tenaga Pendidik', name: 'Deni Setiana,S.Si., M.CS.', pendidikan: "S2: Ilmu Komputer UGM, S1: Matematika UNPAD", bidang: "Advanced Networking, Distribution Systems, Information Security", email: "deni@unpad.ac.id", initial: 10, key: 'dosen10' },
    { divisi: 'Tenaga Pendidik', name: 'Rudi Rosadi, S.Si., M.Kom.', pendidikan: "", bidang: "", email: "rudi.rosadi@unpad.ac.id", initial: 11, key: 'dosen11' },
    { divisi: 'Tenaga Pendidik', name: 'Dr. Intan Nurma Yulita, M.T.', pendidikan: "S3: Ilmu Komputer UI, S2: Universitas Telkom, S1: Telkom University", bidang: "Data Mining, Data Science, Imaging Science", email: "intan.nurma@unpad.ac.id", initial: 12, key: 'dosen12' },
    { divisi: 'Tenaga Pendidik', name: 'Aditya Pradana, S.T., M.Eng.', pendidikan: "S1: Universitas Kristen Maranatha, S2: Universitas Gadjah Mada", bidang: "Networking, Data Communication, Hardware and Infrastructure, Web Design and Mobile Programming", email: "aditya.pradana@unpad.ac.id", initial: 13, key: 'dosen13' },
    { divisi: 'Tenaga Pendidik', name: 'Mira Suryani, S.Pd., M.Kom.', pendidikan: "S2: Ilmu Komputer UI, S1: Ilmu Komputer UPI", bidang: "Learning Management, Multimedia, Virtual/Augmented Reality, Image Processing", email: "mira.suryani@unpad.ac.id", initial: 14, key: 'dosen14' },
    { divisi: 'Tenaga Pendidik', name: 'Dr. Afrida Helen, M.T.', pendidikan: "S3: Institut Teknologi Bandung, S2:Institut Teknologi Bandung, S1: Institut Teknologi Sepuluh November (ITS)", bidang: "Data Science", email: "helen@unpad.ac.id", initial: 15, key: 'dosen15' },
])

let tendik = ([
    { divisi: 'Tenaga Kependidikan', name: 'Rd. Ratna Dewi Mintarsih, A.Md.', pendidikan: 'Diploma III PAAP Unpad', bidang: 'Arsiparis Pelaksana Lanjutan/Mahir/Koordinator Tata Usaha', email: 'ratna.dewi@unpad.ac.id', initial: 16, key: 'tendik1' },
    { divisi: 'Tenaga Kependidikan', name: 'Tita Rosita, Dra.', pendidikan: 'S-1 (Sarjana)', bidang: 'Pranata Hubungan Masyarakat Muda/Urusan Perpustakaan', email: 'tita.rosita@unpad.ac.id', initial: 17, key: 'tendik2' },
    { divisi: 'Tenaga Kependidikan', name: 'Djusmiardi', pendidikan: 'SMA', bidang: " Arsiparis Pelaksana/Terampil/Urusan Sarana Pendidikan", email: "djusmiardi@unpad.ac.id", initial: 21, key: 'tendik3' },
    { divisi: 'Tenaga Kependidikan', name: 'Dede Mulyana', pendidikan: 'SMA', bidang: "Arsiparis Pelaksana/Terampil/Administrasi Program Studi", email: "dede.mulyana@unpad.ac.id", initial: 18, key: 'tendik4' },
    { divisi: 'Tenaga Kependidikan', name: 'Reza Purwadi', pendidikan: 'SMA', bidang: "Pranata Komputer Pelaksana/Terampil/Urusan Teknis", email: "anton@unpad.ac.id", initial: 19, key: 'tendik5' },
    { divisi: 'Tenaga Kependidikan', name: 'Anton Djudju Supriatna', pendidikan: 'SMA', bidang: "Arsiparis Pelaksana/Terampil/Administrasi Departemen", email: "anton@unpad.ac.id", initial: 20, key: 'tendik6' },
    { divisi: 'Tenaga Kependidikan', name: 'Suryani', bidang: "Pramu Kantor", initial: 21, key: 'tendik7' },
])


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgBlueLight: {
        flex: 1,
        backgroundColor: "#8FD6E1",
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    bgBlueDark: {
        backgroundColor: "#1597BB",
        position: "relative",
        padding: 0,
    },
    subTitle: {
        color: "#fff",
        padding: 10,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    },
})

const images = {
    initials: {
        1: require('../assets/dosen/ASA.jpg'),
        2: require('../assets/dosen/SH.jpg'),
        3: require('../assets/dosen/AKH.jpg'),
        4: require('../assets/dosen/JR.jpg'),
        5: require('../assets/dosen/AS.jpg'),
        6: require('../assets/dosen/IS.jpg'),
        7: require('../assets/dosen/R.jpg'),
        8: require('../assets/dosen/AK.jpg'),
        9: require('../assets/dosen/EP.jpg'),
        10: require('../assets/dosen/DS.jpg'),
        11: require('../assets/dosen/RR.jpg'),
        12: require('../assets/dosen/INY.jpg'),
        13: require('../assets/dosen/AP.jpg'),
        14: require('../assets/dosen/MS.jpg'),
        15: require('../assets/dosen/AFH.jpg'),
        16: require('../assets/tendik/RD.jpg'),
        17: require('../assets/tendik/TR.jpg'),
        18: require('../assets/tendik/DM.jpg'),
        19: require('../assets/tendik/RP.jpg'),
        20: require('../assets/tendik/AD.jpg'),
        21: require('../assets/tendik/ANON.jpg'),
    }
}

export default StafScreen

