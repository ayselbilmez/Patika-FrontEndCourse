# WEEK 1

- [Pratik 1 - Sınıf Tablosu](#pratik-1---sınıf-tablosu)
- [Pratik 2 - Form Elemanları Kullanımları](#pratik-2---form-elemanları-kullanımları)
- [Ödev 1 - İlk Web Sayfamızı Oluşturmak](#ödev-1---i̇lk-web-sayfamızı-oluşturmak)
- [Ödev 2 - Kişisel Blog Sayfası Oluşturma](#ödev-2---kişisel-blog-sayfası-oluşturma)

## Pratik 1 - Sınıf Tablosu

## Soru ve Cevapları:

1 - HTML Dosyasının Oluşturulması: Yeni bir HTML dosyası oluşturun ve dosyayı sinif_tablosu.html olarak kaydedin.

2 - Temel HTML Yapısı: HTML dosyasının temel yapısını oluşturun. <html>, <head>, <body>, <title> ve <style> etiketlerini doğru bir şekilde kullanın.

```HTML
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sinif Tablosu</title>  <!-- Sayfa basligi burada degistirilmistir -->
</head>
<body>

</body>
</html>
```

3 - Sayfa Başlığı: Sayfanın başlığı olarak "Sınıf Tablosu" ifadesini kullanın ve h1 etiketi ile sayfa başlığını belirleyin.

4 - Tablonun Oluşturulması: <table> etiketi ile bir tablo oluşturun. Tabloya başlık (header) satırı ekleyin ve dört sütun başlığı tanımlayın: "Öğrenci Numarası", "Adı", "Soyadı" ve "Notu".

```HTML
<table style="width: 100%">
      <thead style="background-color: aqua">
        <th style="border: 1px solid black; padding: 15px">Ogrenci Numarasi</th>
        <th style="border: 1px solid black; padding: 15px">Adi</th>
        <th style="border: 1px solid black; padding: 15px">Soyadi</th>
        <th style="border: 1px solid black; padding: 15px">Notu</th>
        <th style="border: 1px solid black; padding: 15px">Dogum gunu</th>
      </thead>
```

5 - Öğrenci Bilgileri: Tabloya en az 5 öğrenci ekleyin. Her öğrenci için "Öğrenci Numarası", "Adı", "Soyadı" ve "Notu" bilgilerini doldurun.

```HTML
        <tr>
          <td style="border: 1px solid black; padding: 15px">101</td>
          <td style="border: 1px solid black; padding: 15px">Aysel</td>
          <td style="border: 1px solid black; padding: 15px">Bilmez</td>
          <td style="border: 1px solid black; padding: 15px">90</td>
          <td style="border: 1px solid black; padding: 15px">1998</td>
        </tr>
```

6 - Tablo Stilinin Belirlenmesi: Tabloya bazı temel stiller uygulayın:

     * Tablonun genişliğini yüzde 100 yapın.
      ```HTML
      <table style="width: 100%">
      ```
     * Hücrelerin (th, td) kenarlıklarını belirleyin ve padding (iç boşluk) ekleyin.
      ```HTML
      <td style="border: 1px solid black; padding: 15px">101</td>
      ```
     * Tablo başlık satırının (th) arka plan rengini belirleyin.
      ```HTML
      <thead style="background-color: aqua">
      ```

7 - Yeni Öğrenciler Ekleme: Tabloya en az 3 öğrenci daha ekleyin. Yeni öğrencilerin "Öğrenci Numarası", "Adı", "Soyadı" ve "Notu" bilgilerini doldurun.

8 - Yeni Sütun Ekleme: Tabloya yeni bir sütun ekleyerek öğrencilerin "Doğum Tarihi" bilgilerini ekleyin. Hem başlık satırına hem de her öğrenci için doğum tarihi bilgisi ekleyin.

## Pratik 2 - Form Elemanları Kullanımları

## Soru ve Cevapları:

1. Kullanıcının adını ve soyadını girebileceği iki metin kutusu.

```HTML
        <div>
          <label for="name">İsim:</label>
          <input type="text" id="name" />
        </div>
        <br />
        <div>
          <label for="surname">Soyisim:</label>
          <input type="text" id="surname" />
        </div>
```

2. Kullanıcının e-posta adresini girebileceği bir e-posta giriş alanı.

```HTML
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" />
        </div>
```

3. Kullanıcının parolasını girebileceği bir parola giriş alanı.

```HTML
        <div>
          <label for="password">Şifre</label>
          <input type="password" id="password" />
        </div>
```

4. Kullanıcının cinsiyetini seçebileceği iki radyo düğmesi (Erkek ve Kadın).

```HTML
        <div>
          <label for="gender">Cinsiyet</label>
          <input type="radio" id="female" /> Kadın
          <input type="radio" id="male" /> Erkek
        </div>
```

5. Kullanıcının bir dizi seçenek arasından favori meyvesini seçebileceği bir açılır liste (örneğin, Elma, Muz, Çilek).

```HTML
        <div>
          <label for="fruit">En sevdiğin meyve:</label>
          <select id="fruit">
            <option value="select">Seçiniz...</option>
            <option value="Apple">Elma</option>
            <option value="Banana">Muz</option>
            <option value="Pineapple">Ananas</option>
          </select>
        </div>
```

6. Kullanıcının bir mesaj yazabileceği bir metin alanı.

```HTML
        <div>
          <label for="message">Mesajınız:</label>
          <textarea id="message" rows="5" cols="30"></textarea>
        </div>
```

7. Tüm bilgileri göndermek için bir "Gönder" düğmesi.

```HTML
        <div>
          <button type="submit">Gönder</button>
          <button type="reset">Temizle</button>
        </div>
```

## Ödev 1 - İlk Web Sayfamızı Oluşturmak

## Soru ve Cevapları:

1. Genel Yapı:

Sayfanızın temel yapısını oluşturmak için HTML5 doküman yapısını kullanın.
head etiketinin içinde sayfanızın başlığı ve karakter seti olmalıdır.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Özgecmişim</title>
  </head>
```

2. Sayfanızın en üstünde bir ana başlık bulunmalıdır. Bu başlık adınızı içermelidir.

```HTML
    <h1 style="text-align: center; color: blueviolet">Aysel Bilmez</h1>
```

Alt başlıklar kullanarak CV’nizin bölümlerini düzenleyin.

```HTML
<h2 style="color: navy">Summary</h2>
```

Her bölümde en az bir paragraf olmalıdır.

```HTML
<p style="text-align: justify">
        Former R&D Food Engineer transitioning into software development,
        leveraging strong analytical skills and experience in customer-focused
        projects and teamwork. Skilled in .NET Frameworks, ASP.NET, .NET API,
        and SQL, with hands-on experience designing user-centered web
        applications. Continuously learning and adapting by utilizing diverse
        resources, with a strong belief in the importance of growth and staying
        agile in a fast-changing field. Fluent in English and Turkish, ready to
        contribute to impactful software projects with a detail-oriented and
        innovative approach.
</p>
```

3. En az bir sıralı liste ve bir sırasız liste kullanın.

```HTML
<ol>
        <li>Turkish (Native)</li>
        <li>English (Fluent)</li>
      </ol>
```

```HTML
<ul>
        <li>Gaining proficiency in Full-Stack Technologies.</li>
        <li>
          Building and optimizing full-stack web applications with a
          user-centric approach.
        </li>
        <li>
          Applying problem-solving skills to debug and enhance web application
          performance.
        </li>
      </ul>
```

4. Sayfanızda en az bir tane resim kullanın.

```HTML
 <img
        src="https://store.patika.dev/userFiles/aysbi/userfiles/profilepicture-zEe73P6i"
        alt="Aysel Bilmez"
        width="300"
      />
```

En az iki farklı sayfaya veya web sitesine bağlantı ekleyin.

```HTML
<p style="text-align: center">
        <a
          href="mailto:aybilmez@gmail.com"
          style="color: black; text-decoration: none"
          >Email</a
        >
        |
        <a href="tel:+905397844110" style="color: black; text-decoration: none"
          >Telefon Numarası</a
        >
        |
        <a
          href="https://www.linkedin.com/in/ayselbilmez/"
          style="color: black; text-decoration: none"
          >Linkedin</a
        >
        |
        <a
          href="https://github.com/aysbi"
          style="color: black; text-decoration: none"
          >GitHub</a>
```

5. Sayfanızda en az bir tane iframe kullanarak başka bir web sayfasını veya içeriği entegre edin.

```HTML
<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0177463439167!2d35.32131718468505!3d37.00167077979803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521c6d014c081ff%3A0x37aab8c8ca021c29!2sAdana!5e0!3m2!1str!2str!4v1674698172202!5m2!1str!2str"
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
```

6. Sayfanızın içinde CSS kullanarak (örneğin, style etiketi içinde) en azından temel stiller uygulayın

```HTML
<p style="text-align: center">
```

7. Sayfanızın düzenini iyi düşünün. İçeriğinizi bölümlere ayırarak düzenli ve okunabilir hale getirin.

div veya section etiketlerini kullanarak bölümler oluşturabilirsiniz.

```HTML
<div>
      <h2 style="color: navy">Summary</h2>
      <p style="text-align: justify">
        Former R&D Food Engineer transitioning into software development,
        leveraging strong analytical skills and experience in customer-focused
        projects and teamwork. Skilled in .NET Frameworks, ASP.NET, .NET API,
        and SQL, with hands-on experience designing user-centered web
        applications. Continuously learning and adapting by utilizing diverse
        resources, with a strong belief in the importance of growth and staying
        agile in a fast-changing field. Fluent in English and Turkish, ready to
        contribute to impactful software projects with a detail-oriented and
        innovative approach.
      </p>
</div>
```

## Ödev 2 - Kişisel Blog Sayfası Oluşturma

## Soru ve Cevapları:

1. Sayfanızın temel yapısını oluşturmak için HTML5 doküman yapısını kullanın.

head etiketinin içinde sayfanızın başlığı title ve karakter seti meta charset="UTF-8" olmalıdır.

```HTML
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kişisel Blog</title>
  </head>
  <body>
    <header>
      <h1>Yazılım ve Eğlence Blogu</h1>
    </header>
```

2. Sayfanızın en üstünde blogunuzun adını içeren bir ana başlık h1 olmalıdır.

Her blog yazısı için bir başlık h2 ve bir paragraf p ekleyin. En az üç blog yazısı ekleyin.

```HTML

 <header>
      <h1>Yazılım ve Eğlence Blogu</h1>
    </header>

    <section>
      <article>
        <h2>
          RESTful API: Çayınızı Kahvenizi Hazırlayın, Çünkü O Bir Servis! ☕
        </h2>
        <p>
          Bir sabah uyandınız ve "Ben bir RESTful API yazacağım!" dediniz. Ama
          API neydi? Rest mi ediyordu? Yoksa kahvaltıda mı servis ediliyordu? 🤔
          Gelin, bu karmaşık gibi görünen ama aslında çok eğlenceli olan konuyu
          basit ve eğlenceli bir şekilde açıklayalım!
        </p>
        </article>
        </section>
```

3. Her blog yazısında en az bir sırasız liste ul veya sıralı liste ol kullanarak önemli noktaları veya maddeleri listeleyin.

```HTML
<ul>
          <li>Sen: "Merhaba, bir büyük boy pizza istiyorum."</li>
          <li>Pizzacı: "Tamam, siparişiniz alındı!"</li>
          <li>(Bir süre sonra kapı çalar)</li>
          <li>Pizzacı: "Buyurun, sıcak ve taze pizzanız geldi!"</li>
        </ul>
```

4. Her blog yazısına en az bir görsel img ekleyin ve alt özniteliğini doldurun.

```HTML
       <img
          src="https://img.sepetkey.com/album/italiandipizza/urunler/IrAWB6JxqcQYG2S20Cwg.png"
          alt="Bir dilim pizza resmi"
          width="300"
        />
```

Blog yazılarının içinde başka sayfalara veya kaynaklara bağlantılar a ekleyin. En az iki bağlantı olmalıdır.

```HTML
<a href="https://developer.mozilla.org/tr/docs/Glossary/REST"
            >RESTful API hakkında daha fazla bilgi için buraya tıklayın!</a
          >
```
