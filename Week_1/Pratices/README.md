# WEEK 1 PRATIK 1 TABLOLARLA CALISMAK

## Soru: 
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
3 - Sayfa Başlığı: Sayfanın başlığı olarak "Sınıf Tablosu" ifadesini kullanın ve <h1> etiketi ile sayfa başlığını belirleyin.

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

