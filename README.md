# Tree And Routes Study

## Görev - 1 - Router Kullanımı

- Senaryo: Biz uygulamada 2 farklı sayfa oluşturmak istiyoruz. Bu sayfaların biri "Home" diğeri ise "Tree Page" olacak. "Home" sayfasında bir "Tree Page" linki olacak. "Tree Page" sayfasında "Tree" Component'ı olacak. Bu sayfalara ait route'ları oluşturunuz.
- Kullanacağımız Route Kütüphanesi: https://reactrouter.com/en/main

## Görev - 2 - Tree Yapısı Kullanımı

- Senaryo: Bir servisten bize Tree Component ile uyumlu olmayan ancak Tree Component ile sergilenmesi gereken bir json objesi dönmüştür. Ve bizim bu objeyi Tree Component ile uyumlu hale getirmemiz gerekmektedir. (Not: "ItemList" içerisinde sonu belirli olmayan bir şekilde iç içe "ItemList" dizileri bulunmaktadır.
  "public > json > tree.json" içerisindeki "ItemList" sayısı artabilir / azalabilir.)
- Kullanacağımız Tree Component'ı => https://www.primefaces.org/primereact/tree/

### İpuçları:

- "data" içerisinde bir json objesi var.
- Bu objenin içerisinde iç içe "ItemList" dizileri var.
- Tree Component'ı "ItemList" yerine "children" isminde dizileri bekliyor.
- Tree Component'ı "DisplayName" yerine "label" isminde bir değer bekliyor.

- Sizden beklentimiz "public > json > tree.json" dosyasına müdahale etmeden, sadece "data" objesini "children" ve "label" isimlerine göre düzenleyerek (veya ekleyerek) Tree Component'ı ile uyumlu hale getirmenizdir.
