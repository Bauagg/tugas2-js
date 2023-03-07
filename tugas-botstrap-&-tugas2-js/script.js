const profil = {
    nama: `baus`,
    umur: 22,
    hobi: `coding`,
    tanggalLahir: {
        tanggal: 05,
        bulan: `januari`,
        tahun: 2001,
    },
    agama: `islam`,
    jenisKlamin: `laki-laki`,
}
// destructuring Object
const { nama, umur, hobi, tanggalLahir: { tahun }, ...lainya } = profil;
console.log(nama, umur, hobi, tahun, lainya)

// destructuring array
const buah = ['nanas', 'jeruk', 'mangga', 'smangka', 'anggur']
const [nanas, anggur, ...buahLainya] = buah
console.log(nanas, anggur, buahLainya)


// object milik function
const siswa = {
    nama: `april`,
    skolah: `SDN 2 bangeran`,
    kelas: 5,
    id: 123456,
    umur: 8
}
// destructuring functio.
function dataSiswa1({ nama, skolah, kelas }) {
    console.log(nama, skolah, kelas,)
}

dataSiswa1(siswa)

// destructuring function = default dan alias
function dataSiswa2({ nama, skolah: skl, kelas, hobi = 'renang' }) {
    console.log(nama, skl, kelas, hobi)
}

dataSiswa2(siswa)