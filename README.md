## Octopus Waterfall

ini adalah repository dari website: https://octopuswaterfall.web.app/

**Preview App:**

![Preview Octopus Waterfall](preview/Octopus&#32;Waterfall.svg)


Yang dibutuhkan:
* [Node JS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)

Instalisasi:
1. ```git clone https://github.com/adamcanray/octopus-waterfall```
2. ```cd octopus-waterfall```
3. ```npm install``` -- ini akan mengunduh semua Package yang ada pada file **package.json** dibutuhkan oleh aplikasi(ReactApp) dan akan disimpan pada folder **node_modules/**(terbuat ketika menjalankan perintah ```npm install```)
4. ```npm start``` -- untuk menjalankan Development Server(http://localhost:3000)
5. lalu kunjungi alamat http://localhost:3000 pada browser


>PERHATIAN: Setelah mengikuti proses installasi diatas pasti akan ada **error**, karena pada file **fbConfig.js** API-KEY dan kawan-kawannya belum di-SET menyebabkan koneksi ke Firebase belum ter-Autentikasi. <br><br> Silahkan **Pull-Request** dan menjadi **Contributor** lalu saya bisa memberikan akses anda ke Firebase Project dan kita **Kembangkan Octopus Waterfall** bersama-sama.