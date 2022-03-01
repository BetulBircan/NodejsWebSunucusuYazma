/*
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
 */

//node.js tarafında bir web sunucusu yazmak için node.js core modülü olan http modülünden faydalanacağız. 
//http tanımlama
const http = require('http')

//sunucuyu oluşturmak için http.createServer() metodu kullanılır.request ve response parametreleri alır.
const server = http.createServer((req,res) => {

    //request ten url bilgisini yakalama
    const url = req.url

    //anasayfadaki /index sayfasına yönlendirme
    if(url === "/index" || url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write("<h2>İndex Sayfasına Hoşgeldiniz</h2>")
    }
    
    //Hakkımızda sayfasına yönlendirme
    else if(url === "/hakkimizda") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write("<h2>Hakkımızda Sayfasına Hoşgeldiniz</h2>")
    }
    
    //İletişim Sayfasına Yönlendirmw
    else if(url === "/iletisim") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write("<h2>İletişim Sayfasına Hoşgeldiniz</h2>")
    }

})