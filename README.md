# NodejsWebSunucusuYazma

Bu proje kendi  bilgisyayrımızda aşağıdaki özellikleri kullanarak kendi web sunucumuzu yazmak için oluşturuldu.

-createServer metodunu kullanacağız.

-index, hakkimda ve iletisim sayfaları oluşturalım.

-Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.

-port numarası olarak 5000'i kullanalım.

Node.js tarafında bir web sunucusu yazmak için node.js core modülü olan http modülünden faydalanacağız. Bu yüzden ilk olarak server.js dosyası oluşturuldu ve http modülü sayfa  içerisine tanımlandı. Daha sonra http.createServer metodu ile sayafaya request response işlemi yaptık ve de index,hakkimizda ve iletisim sayfalarına yönlendirildi. En sonunda da port numarası tanımlayıp bu portu server.listen metoduyla sunucuyu başlatıldı ve proje sonlandı.

```
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

    else {
        res.writeHead(404, {"Content-Type":"text/html"}) 
        res.write("<h2>404 NOT FOUND</h2>")
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
```
**Sonucları**

![websunucusuconsole](https://user-images.githubusercontent.com/86554799/156177069-c32ad7d9-ede7-42a8-b5c1-26ffd3802a02.jpg)

  **İndex Sayfasına Yönlendirme**
  
![websunucusuindex1](https://user-images.githubusercontent.com/86554799/156177219-1f5df072-b28b-48c4-81b1-e1597865acb8.jpg)
![websunucusuindex2](https://user-images.githubusercontent.com/86554799/156177256-ef1e3545-ffe9-4621-b857-ff2c78072316.jpg)

**Hakkimizda Sayfasına Yönlendirme**

![websunucusuhakkimizda](https://user-images.githubusercontent.com/86554799/156177324-acc51bcf-da10-4e70-b70f-6817cb008f08.jpg)

**İletisim Sayfasına Yönlendirme** 

![websunucusuiletisim](https://user-images.githubusercontent.com/86554799/156177446-86c7221a-5cfc-4cfe-9bb4-c85016db1b89.jpg)

**Eğer bunların dışında bir sayfaya yönlendirilirse 404 Not Found hatası alır.**

![websunucusuherhangi](https://user-images.githubusercontent.com/86554799/156177759-3bc30ec4-bc4d-491e-890b-b3ee4f5b0759.jpg)
