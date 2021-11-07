import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import Title from './Title';

export default function List() {
    let GedungA = [
        { list: 'a', text: 'A0204: Kapasitas 80, Luas 100m2' },
        { list: 'b', text: 'A0205: Kapasitas 80, Luas 100m2' },
    ];
    let GedungB = [
        { list: 'a', text: 'B0101: Kapasitas 60, Luas 80m2' },
        { list: 'b', text: 'B0102: Kapasitas 60, Luas 80m2' },
        { list: 'c', text: 'B0201: Kapasitas 80, Luas 100m2' },
        { list: 'd', text: 'B0202: Kapasitas 60, Luas 80m2' },
    ];
    let LabSimul = [
        {
            list: 'a',
            text:
                'Laboratorium Multimedia (D0204), dengan kapasitas 20 komputer, Mac Desktop, i5, 4Gb RAM',
        },
        {
            list: 'b',
            text:
                'Laboratorium Pemrograman Komputer (D305), dengan kapasitas 40 komputer, i5',
        },
        { list: 'c', text: 'Laboratorium Jaringan Komputer' },
    ];
    let LabRaid = [
        {
            list: 'a',
            text:
                'Laboratorium Artificial Intelligence (D0306), dengan kapasitas 40 komputer, i7, 8Gb RAM, touchscreen 23″',
        },
        { list: 'b', text: 'Laboratorium Robotika (D0210)' },
        { list: 'c', text: 'Laboratorium Interaksi Manusia dan Komputer (D0205)' },
    ];
    let LabInfo = [
        {
            list: 'a',
            text:
                'Laboratorium Informatika 1-5 di D0206, D0212, D0312, D0313, D0315 dengan kapasitas masing-masing 40 komputer, i5, 4Gb RAM',
        },
    ];
    let Perpus1 = [
        { list: 'a', text: 'Perpustakaan Pusat' },
        { list: 'b', text: 'Perpustakaan Fakultas MIPA' },
        { list: 'c', text: 'Perpustakaan Matematika' },
    ];
    let Perpus2 = [
        { list: 'a', text: 'Perpustakaan Nasional (PNRI)' },
        { list: 'b', text: 'Perpustakaan ITB' },
        { list: 'c', text: 'Computer Science Digital Library IEEE Computer Society' },
    ];
    let SIKA = [
        { list: 'a', text: 'Perpustakaan Nasional (PNRI)' },
        { list: 'b', text: 'Perpustakaan ITB' },
        { list: 'c', text: 'Sistem Informasi Otentikasi Sistem (PAUS-ID)' },
        { list: 'd', text: 'Sistem Informasi Dosen (Staffs)' },
        {
            list: 'e',
            text: 'Sistem Informasi Keuangan dan Sarana Prasarana (ERP-Oracle)',
        },
    ];
    let SIKP = [
        { list: 'a', text: 'Sistem Pembelajaran Daring (CS-Learning)' },
        { list: 'b', text: 'Sistem Informasi Pembelajaran (LIVE)' },
        { list: 'c', text: 'Sistem Informasi Repositry Kepustakaan (Kandaga)' },
        {
            list: 'd',
            text: 'Sistem Informasi Penelitian dan Pengabdian pada Masyarakat',
        },
    ];
    let PLB = [
        {
            list: 'a',
            text:
                'Microsoft Campus Agreement, untuks emua perangkat lunak keluaran Microsoft',
        },
        {
            list: 'b',
            text:
                'Microsoft Imagine, fasilitas bagi mahasiswa STEM menunduh perangkat lunak Microsoft secara legal',
        },
        { list: 'c', text: 'Perangkat lunak keluaran Adobe' },
        { list: 'd', text: 'Perangkat lunak MATLAB untuk penelitian saintifik' },
        {
            list: 'e',
            text: 'Perangkat lunak SPSS untuk penelitian sosial dan saintifik',
        },
    ];
    let RP = [
        { list: 'a', text: 'Ruang Ketua Program Studi (D0105)' },
        { list: 'b', text: 'Ruang Kepala Departemen (D0211)' },
        { list: 'c', text: 'Perangkat lunak keluaran Adobe' },
        {
            list: 'd',
            text: 'Ruang Administrasi Departemen dan Program Studi (D0108)',
        },
    ];
    let FL = [
        {
            list: 'a',
            text:
                'Ruang ibadah berupa mushola setiap lantai dan masjid Bale Awehan Unpad',
        },
        { list: 'b', text: 'Lapangan olah raga : Lapangan Jati, dan Bale Santika' },
        { list: 'c', text: 'Ruang himpunan mahasiswa (D0316)' },
        { list: 'd', text: 'Fasilitas parkir mobil dan motor yang aman' },
        {
            list: 'e',
            text: 'Petugas keamanan (Sentinel) dan petugas kebersihan kampus (K3L)',
        },
        {
            list: 'f',
            text:
                'Ruang rapat bersama (departemen, fakultas, dan Unpad), Bale Sawala, Bale Rucita',
        },
        {
            list: 'g',
            text: 'Tempat pertemuan dan diskusi mahasiswa secara terbuka (Selasar)',
        },
        { list: 'h', text: 'Ruang penelitian dan tugas akhir (D0214)' },
        {
            list: 'i',
            text: 'Ruang penelitian untuk keperluan Kompetisi Robotika (Cobra))',
        },
        { list: 'j', text: 'Transportasi dalam kampus gratis' },
        { list: 'k', text: 'Ruang Tempat Uji Kompetensi (Dalam Perencanaan)' },
        {
            list: 'l',
            text:
                'Fasilitas kesehatan di Klinik Padjadjaran dan Fakultas Kedokteran, Fakultas Kedokteran Gigi, dan Fakultas Keperawatan.',
        },
    ];

    return (
        <ScrollView>
            <View styles={styles.container}>
                <Title title="Ruang Kuliah" />
                <Text style={styles.text}>
                    Terdapat 6 (enam) ruang kuliah yang digunakan dalam kegiatan akademik
                    dan terdistribusi di 2 gedung yaitu Gedung A dan Gedung B. Ruang
                    kuliah tersebut telah dilengkapi dengan kursi dan meja kuliah, kursi
                    dan meja dosen, meja LCD Proyektor, jendela ventilasi yang nyaman,
                    serta penerangan yang memadai. Sebagian ruang kuliah dilengkapi dengan
                    pendingin udara.
                </Text>

                <Text style={styles.titleList}>Gedung A</Text>

                {GedungA.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}

                <Text style={styles.titleList}>Gedung B</Text>

                {GedungB.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container}>
                <Title title="Laboratorium" />
                <Text style={styles.text}>
                    Laboratorium di Program Studi S-1 Teknik Informatika dikelola oleh 2
                    orang kepala laboratorium yaitu Kepala Laboratorium Laboratorium
                    Sistem Informasi, Teknologi Informasi, dan Multimedia (SIMUL) dan
                    Kepala Laboratorium Robotika, Kecerdasan Artifisial, dan Citra Digital
                    (RAID). Secara fisik pengelolaan laboratorium dikelompokkan sebagai
                    berikut:
                </Text>

                <Text style={styles.titleList}>Laboratorium SIMUL</Text>

                {LabSimul.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}

                <Text style={styles.titleList}>Laboratorium RAID</Text>

                {LabRaid.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}

                <Text style={styles.titleList}>Laboratorium Informatika Bersama</Text>

                {LabInfo.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container}>
                <Title title="Perpustakaan" />
                <Text style={styles.text}>
                    Perpustakaan program studi menempati ruangan D0109. Perpustakaan
                    menggunakan aplikasi SLIM yang dapat diakses secara global. Untuk data
                    peminjaman buku, digunakan aplikasi internal. Unpad menyediakan URL
                    khusus untuk tempat penyimpanan informasi publik dengan alamat
                    http://kandaga.unpad.ac.id. Perpustakaan lain yang dapat diakses
                    secara penuh adalah
                </Text>

                {Perpus1.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}

                <Text style={styles.text}>
                    dan beberapa perpustakaan lainnya baik online (nasional dan
                    internasional) maupun fisik antara lain:
                </Text>

                {Perpus2.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container}>
                <Title title="Sistem Informasi" />
                <Text style={styles.text}>
                    Sistem informasi di program studi dan departemen merupakan sistem
                    informasi terpusat dan terintegrasi yang disebut SIAT atau Sistem
                    Informasi Akademik Terpadu. Perangkat Lunak berlisensi sudah memiliki
                    lisensi dan legal. Sistem informasi dikelaompokkan dalam sistem
                    informasi untuk administrasi dan sistem informasi untuk kegiatan
                    pembelajaran dan penelitian.
                </Text>

                <Text style={styles.titleList}>
                    Sistem Informasi Untuk Keperluan Administrasi
                </Text>

                {SIKA.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}

                <Text style={styles.titleList}>
                    Sistem Informasi untuk Kegiatan Pembelajaran dan Penelitian
                </Text>

                {SIKP.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}

                <Text style={styles.titleList}>Perangkat Lunak Berlisensi</Text>

                {PLB.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container}>
                <Title title="Ruang Dosen" />
                <Text style={styles.text}>
                    Setiap dosen menempati ruangan masing-masing yang dilengkapi dengan
                    perlengkapan perkantoran memadari dan modern yaitu luasan {'>'} 4m2,
                    meja kantor, kursi staf, lemari, komputer, fasilitas internet Hi-Speed
                    24 jam. Untuk kenyamanan ditambahkan pendingin udara dan fasilitas
                    makan-minum secukupnya. Selain itu juga tersedia meja diskusi dan
                    ruang diskusi. Untuk keamanan akses dilakukan secara terpadu satu
                    pintu.
                    {'\n\n'}Walaupun setiap dosen menempati satu ruang secara pribadi
                    (privacy), namun aspek komunikasi baik antara dosen, antara dosen
                    dengan mahasiswa, dan dengan tenaga kependidikan dan tamu tetap
                    dipertahankan dengan adanya ruang terbuka bersama. {'\n\n'} Setiap
                    dosen yang mengajar di program studi berkedudukan di Departemen Ilmu
                    Komputer. Setiap dosen tergabung dalam Kelompok Bidang Keahlian (KBK).
                    Saat ini ada 2 KBK yang aktif yaitu KBK Sistem Informasi Sistem
                    Multimedia dan KBK Sistem Cerdas dan Sistem Grafika.
                </Text>
            </View>

            <View style={styles.container}>
                <Title title="Ruang Pengelola" />
                <Text style={styles.text}>
                    Pengelola merupakan kesatuan integral yang terdiri dari Departemen
                    Ilmu Komputer dan Program Studi yang memiliki TUPOKSI spesifik.
                    Departemen mengelola Penelitian dan Pengabdian, SDM, dan
                    Infrastruktur, sedangkan Program Studi mengelola Kegiatan Akademik dan
                    Kemahasiswaan.
                </Text>

                {RP.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={styles.container}>
                <Title title="Fasilitas Lainnya" />
                <Text style={styles.text}>
                    Untuk menunjang kegiatan akademik baik dosen, mahasiswa, maupun tenaga
                    kependidikan, disediakan ruang-ruang khusus yaitu
                </Text>

                {FL.map(item => {
                    return (
                        <View key={item.list} style={styles.list}>
                            <View style={{ flex: 1 }}>
                                <Text>{item.list}.</Text>
                            </View>
                            <View style={{ flex: 12 }}>
                                <Text>{item.text}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    text: {
        padding: 20,
    },
    titleList: {
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 15,
    },
    list: {
        flexDirection: 'row',
        marginLeft: 35,
        marginRight: 35,
    },
});
