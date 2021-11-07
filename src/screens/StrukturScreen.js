import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'

export default function StrukturScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageUri={require('../assets/Header-struktur.png')}
                    header="PROFIL PRODI"
                    title="Struktur Organisasi"
                />

                <View style={{ marginTop: -50 }}>
                    <Text style={styles.text}>Sistem tata pamong di Prodi Teknik Informatika FMIPA Unpad, yang mengacu kepada sistem Organisasi dan Tata Kelola (OTK) Universitas Padjadjaran, terdiri dari tiga komponen yaitu tenaga pendidik, tenaga kependidikan dan mahasiswa. Selain itu komponen lainnya yaitu alumni dan pengguna alumni juga terlibat dalam pengembangan Prodi.
                {"\n\n"}Prodi Teknik Informatika dipimpin oleh seorang Ketua Prodi. Ketua dan dipilih dari dosen Prodi melalui mekanisme aturan pemilihan yang mengacu pada peraturan dan undang-undang yang berlaku. Calon yang akan dipilih berasal dari staf dosen yang telah memenuhi persyaratan baik dari kualifikasi akademik, jabatan, kepangkatan serta syarat non akademik seperti memiliki sifat kepemimpinan dan tanggung jawab. Calon terpilih diusulkan oleh Prodi ke Fakultas kemudian ke Universitas dalam rangka penetapan Ketua dan Sekretaris Prodi oleh Rektor.
                {"\n\n"}Uraian lebih jauh tentang tata pamong, susunan organisasi dan lain sebagainya dapat dilihat dalam Peraturan Rektor terkait. </Text>
                </View>

                <Text style={styles.title}>
                    Susunan organisasi periode 2016-2021 (revisi 2020)
                </Text>

                {StrukturOrganisasi.map((item) => {
                    return (
                        <View key={item.text} style={styles.list}>
                            <View style={{ paddingVertical: 15, paddingHorizontal: 20, flex: 1, flexDirection: 'row', }}>

                                <Text style={{ flex: 4 }}>{item.jabatan}</Text>
                                <Text style={{ flex: 1 }}> :</Text>
                                <Text style={{ flex: 3, marginRight: 5 }}> {item.text} </Text>

                            </View>
                        </View>
                    )
                })}

                <View>
                    <Text style={styles.title}>
                        Pemantauan dan Evaluasi (Monev)
                    </Text>
                    {Pemantauan.map((item) => {
                        return (
                            <View key={item.list} style={styles.list}>
                                <View style={{ paddingVertical: 15, paddingHorizontal: 20, flex: 1, flexDirection: 'row', }}>

                                    <Text style={{ flex: 1 }}>{item.list}</Text>
                                    <Text style={{ flex: 12, marginRight: 5 }}>{item.text} </Text>

                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

let StrukturOrganisasi = ([
    { jabatan: 'Kepala Departemen Ilmu Komputer', text: 'Dr. Setiawan Hadi, M.Sc.CS.' },
    { jabatan: 'Ketua Program Studi S-1 Teknik Informatika', text: 'Dr. Juli Rejito, M.Kom.' },
    { jabatan: 'Sekretaris Program Studi S-1 Teknik Informatika', text: 'Nani Sumarni, SAP.' },
    { jabatan: 'Kepala Laboratorium Sistem Informasi dan Multimedia', text: 'Rudi Rosadi, S.Si., M.Kom.' },
    { jabatan: 'Kepala Laboratorium Robotika, Kecerdasan Buatan, dan Citra Digital', text: 'Dr. Asep Sholahuddin, MT.' },
    { jabatan: 'Koordinator Administrasi dan Tata Usaha	', text: 'Ratna Dewi Mintarsih, A.Md.' },
])

let Pemantauan = ([
    { list: 'a', text: 'Sistem Akreditasi Nasional Perguruan Tinggi oleh BAN-PT' },
    { list: 'b', text: 'Sistem Penjaminan Mutu Universitas oleh SPM Unpad' },
    { list: 'c', text: 'Monitoring dan Evaluasi Internal oleh Fakultas' },
    { list: 'd', text: 'Evaluasi Laporan Kinerja Dosen oleh Tim Sertifikasi Dosen' },
    { list: 'e', text: 'Evaluasi Pelaksanaan Pengajaran oleh Program Studi' },

])

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    title: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "#150E56",
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    }
})
