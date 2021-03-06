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
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }) //header bilgisini gönderir.
        res.write("<h2>İndex Sayfasına Hoşgeldiniz</h2>") //Sunucudaki isteğe bir cevap yollar.
    }
    
    //Hakkımızda sayfasına yönlendirme
    else if(url === "/hakkimizda") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }) //header bilgisini gönderir.
        res.write("<h2>Hakkımızda Sayfasına Hoşgeldiniz</h2>") //Sunucudaki isteğe bir cevap yollar.
    }
    
    //İletişim Sayfasına Yönlendirme
    else if(url === "/iletisim") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }) //header bilgisini gönderir.
        res.write("<h2>İletişim Sayfasına Hoşgeldiniz</h2>") //Sunucudaki isteğe bir cevap yollar.
    }

    //bunlardan hiçbiri değilse örneğin /test,sayfa bulunamadı olarak yönlendirme
    else {
        res.writeHead(404, {"Content-Type":"text/html"})  //header bilgisini gönderir.
        res.write("<h2>404 NOT FOUND</h2>") //Sunucudaki isteğe bir cevap yollar.
    }

    //response un tamamlandığını gösterir.
    res.end()
})

//port oluşturma
const port = 5000

//Sunucu olarak  kendi bilgisayarımızı kullanacağız. Kendi bilgisayarımızdaki hangi portu kullanacağımızı listen metoduyla yazıyoruz.
server.listen(port, () => {
    console.log(`Sunucu ${port} Numaralı Portta Başlatıldı`)
})