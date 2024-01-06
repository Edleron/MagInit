## Package json Information

### devDependencies

#### Babel-loader

> Babel-Loader bir Node.js paketidir ve webpack ile birlikte kullanılır. Ana görevi, JavaScript dosyalarını Babel aracılığıyla dönüştürmek ve webpack'in bu dosyaları işlemesini sağlamaktır. Bu süreç, çeşitli JavaScript sürümleri ve özellikleri arasında uyumluluk sağlar ve modern JavaScript kodunun eski tarayıcılar da dahil olmak üzere çeşitli ortamlarda çalışmasına olanak tanır. Özetle, `babel-loader` sayesinde geliştiriciler en yeni JavaScript özelliklerini kullanabilir ve kodları geniş bir tarayıcı ve platform yelpazesinde çalışacak şekilde uyumlu hale getirebilirler.

#### Webpack

> Webpack, modern web uygulamaları için bir modül paketleyicisidir (module bundler). Ana amacı, bir web uygulamasındaki tüm modülleri (JavaScript dosyaları, CSS, resimler vb.) alıp, bunları birkaç paket (bundle) halinde birleştirmek ve optimize etmektir. Bu işlem, uygulamanın tarayıcıda daha verimli yüklenmesini ve çalışmasını sağlar.
>
> Webpack'in temel özellikleri ve avantajları şunlardır:
>
> 1. **Modül Sistemi** : Webpack, CommonJS ve ES6 gibi çeşitli modül tanımlama standartlarını destekler. Bu sayede, kodunuzdaki bağımlılıkları düzenli bir şekilde yönetebilir ve modülleri kolayca içe aktarabilirsiniz.
> 2. **Loaders** : Webpack, JavaScript dışındaki dosyaları işlemek için "loader" adı verilen eklentileri kullanır. Örneğin, `css-loader` CSS dosyalarını işler, `babel-loader` ise JavaScript dosyalarını ES5 sürümüne dönüştürür.
> 3. **Plugins** : Webpack, genişletilebilir bir yapıya sahiptir ve çeşitli eklentilerle özelleştirilebilir. Bu eklentiler, paketleme sürecini özelleştirmenizi ve genişletmenizi sağlar.
> 4. **Optimizasyon** : Webpack, uygulamanızın yüklenme süresini azaltmak için dosyaları küçültebilir (minify) ve birleştirebilir. Ayrıca, gerekli olan kodları isteğe bağlı olarak yüklemek (lazy loading) için de kullanılabilir.
> 5. **Geliştirme Araçları** : Webpack, sıcak modül değiştirme (Hot Module Replacement - HMR) gibi geliştirme sürecini kolaylaştıran araçlar sağlar. HMR sayesinde, bir modüldeki değişiklikleri tarayıcıyı yeniden yüklemeye gerek kalmadan hızlıca görebilirsiniz.
>
> Webpack, özellikle büyük ve karmaşık web uygulamaları için son derece faydalıdır çünkü bu tür uygulamalarda modül sayısı ve bağımlılıklar arttıkça, kaynakların yönetimi ve optimizasyonu daha zor hale gelir. Webpack, bu süreci otomatikleştirerek geliştiricilere zaman kazandırır ve uygulamaların performansını artırır.
>
> * **clean-webpack-plugin** : Bu eklenti, her yeni yapı (build) oluşturulmadan önce, önceki yapıların çıktılarını (örneğin, eski dosyaları ve klasörleri) temizlemek için kullanılır. Bu, proje dizininizin düzenli ve güncel kalmasını sağlar.
> * **html-webpack-plugin** : Bu eklenti, bir HTML dosyasını otomatik olarak oluşturur ve webpack tarafından oluşturulan tüm JavaScript ve CSS dosyalarını bu HTML dosyasına ekler. Bu işlem, HTML dosyalarınızın her yapıda güncel kalmasını sağlar ve manuel güncellemeleri ortadan kaldırır.
> * **webpack-cli** : Webpack CLI (Command Line Interface), Webpack yapılarını ve yapılandırmalarını komut satırı üzerinden yönetmek için kullanılan bir araçtır. Bu araç sayesinde, geliştiriciler webpack yapılandırma dosyalarını komut satırı üzerinden kolayca çalıştırabilir ve yönetebilirler.
> * **webpack-dev-server** : Bu araç, yerel bir geliştirme sunucusu sağlar ve dosyalardaki değişiklikleri anında tarayıcıya yansıtarak hızlı bir geliştirme süreci sunar. Ayrıca, Hot Module Replacement (HMR) özelliği ile sayfayı yenilemeden değişiklikleri görüntülemenize olanak tanır.
> * **webpack-merge** : Bu eklenti, birden fazla webpack yapılandırma dosyasını birleştirmek için kullanılır. Bu, özellikle farklı ortamlar (örneğin, geliştirme ve üretim) için farklı yapılandırmalarınız varsa yararlıdır. `webpack-merge`, bu yapılandırmaları kolayca birleştirmenize ve ortak yapılandırma öğelerini yeniden kullanmanıza olanak tanır.
>
> ##### File Loader Packet
>
> `file-loader` paketi, webpack içinde kullanılan bir eklentidir ve temel amacı, dosyaları (örneğin, resimler, fontlar ve diğer medya dosyaları) işleyerek, bunları webpack çıktı paketinin (bundle) bir parçası olarak çıkarabilmektir. İşte `file-loader`'ın işlevselliği ve kullanımı hakkında bazı detaylar:
>
> * **Dosya Yönetimi** : `file-loader`, projenizdeki dosyaları yönetir ve bunları gerektiğinde webpack paketinize dahil eder. Örneğin, bir CSS dosyasında bir resim dosyasına referans verildiğinde, `file-loader` bu resmi bulur, işler ve nihai pakette uygun bir yola yerleştirir.
> * **Dosya Adlandırma ve Yollar** : `file-loader`, işlenen dosyalar için özelleştirilebilir adlandırma şablonları sağlar. Böylece, çıktı dosyalarınızın isimleri ve yolları üzerinde kontrol sahibi olabilirsiniz.
> * **Performans İyileştirme** : `file-loader` kullanımı, web uygulamanızın performansını iyileştirebilir. Çünkü statik varlıkları (assets) doğrudan JavaScript paketinizin içine yerleştirerek, ayrı HTTP isteklerinin sayısını azaltır.
> * **Kullanım Kolaylığı** : `file-loader`, webpack yapılandırma dosyanıza kolayca eklenebilir ve özelleştirilebilir. Bu sayede, projenizdeki statik dosyaların yönetimi otomatik ve sorunsuz hale gelir.
>
> Özetle, `file-loader`, web uygulamanızın statik dosyalarını yönetmek, paketlemek ve bu dosyaları web uygulamanızın çalışma zamanında kullanılabilir hale getirmek için kullanılır. Bu, geliştirme sürecini kolaylaştırır ve uygulamanızın yüklenme süresini iyileştirebilir.

### Dependencies

#### Gsap

> GSAP (GreenSock Animation Platform), web üzerinde yüksek performanslı, esnek ve kullanımı kolay animasyonlar oluşturmak için kullanılan bir JavaScript kütüphanesidir. GSAP, HTML, SVG, CSS ve JavaScript nesneleri üzerinde pürüzsüz animasyonlar yaratmak için tasarlanmıştır.
>
> Bu kütüphanenin bazı önemli özellikleri şunlardır:
>
> * **Yüksek Performans** : GSAP, özellikle karmaşık veya yüksek sayıda animasyon içeren durumlar için optimize edilmiştir ve tarayıcıların animasyonları hızlı ve akıcı bir şekilde çalıştırmasını sağlar.
> * **Esneklik ve Kontrol** : Animasyonlar üzerinde tam kontrol sunar, karmaşık zamanlama, durdurma, geri sarma ve diğer animasyon kontrolleri gibi özelliklere erişim sağlar.
> * **Geniş Uyumluluk** : Eski tarayıcılar dahil çoğu tarayıcıyla uyumludur ve çapraz platform desteği sunar.
> * **Kullanım Kolaylığı** : Basitten karmaşığa, çeşitli zorluk seviyelerindeki animasyonları kolayca oluşturabilirsiniz.
> * **Güçlü API** : Zengin bir API seti sunar, bu sayede geliştiriciler animasyonları istedikleri gibi özelleştirebilirler.
>
> GSAP, web sitelerinde ve uygulamalarında görsel çekicilik ve interaktiflik katmak isteyen geliştiriciler arasında popüler bir seçimdir.

#### Pixi

> Pixi.js, 2D grafikler oluşturmak ve animasyonlar yapmak için kullanılan, hızlı ve güçlü bir JavaScript kütüphanesidir. Web tabanlı uygulama ve oyun geliştirmede sıkça kullanılır. İşte Pixi.js'nin bazı temel özellikleri:
>
> * **WebGL Tabanlı** : Pixi.js, WebGL'i (Web Graphics Library) kullanır, bu da yüksek performanslı grafik işleme ve animasyonlar sağlar. WebGL desteklemeyen tarayıcılarda otomatik olarak yedek olarak Canvas API'yi kullanır.
> * **Hız ve Performans** : Pixi.js, 2D grafik işleme konusunda son derece hızlı ve etkilidir, bu sayede pürüzsüz animasyonlar ve etkileşimli grafikler oluşturmanıza olanak tanır.
> * **Çapraz Platform Uyumluluğu** : Farklı tarayıcılar ve cihazlar arasında geniş uyumluluk sunar, böylece oluşturduğunuz içerikler çeşitli platformlarda sorunsuz bir şekilde çalışır.
> * **Esnek API** : Pixi.js, kullanıcı dostu ve esnek bir API sunar. Bu, grafikleri ve animasyonları kolayca oluşturmanıza, yönetmenize ve özelleştirmenize olanak tanır.
> * **Zengin Özellik Seti** : Sprite'lar, filtreler, etkileşim ve daha fazlası gibi geniş bir özellik yelpazesi sunar, böylece çeşitli görsel efektler ve interaktif öğeler ekleyebilirsiniz.
>
> Kısacası, Pixi.js, oyunlar, interaktif web siteleri ve grafik yoğun web uygulamaları geliştirmek için ideal bir araçtır. Hızlı ve etkili 2D grafik çözümleri sunarak, geliştiricilere yaratıcı ve görsel olarak etkileyici projeler oluşturma imkanı verir.

#### Matter JS

> Matter.js, 2D fizik motoru işlevlerini sağlayan bir JavaScript kütüphanesidir. Web tabanlı projelerde fizik tabanlı etkileşimler ve animasyonlar oluşturmak için kullanılır. Matter.js, nesnelerin hareketini, çarpışmalarını ve diğer fiziksel etkileşimlerini simüle edebilir. İşte Matter.js'in bazı temel özellikleri:
>
> * **Gövde Oluşturma ve Yönetme** : Kütüphane, farklı şekil ve boyutlarda sabit ve hareketli gövdeler (bodies) oluşturmayı ve bunları yönetmeyi sağlar. Bu, top, kutu, poligon gibi çeşitli nesneleri temsil edebilir.
> * **Fizik Kuralları** : Nesneler arasındaki çarpışmalar, yer çekimi, sürtünme ve elastikiyet gibi fiziksel özellikler gerçekçi bir şekilde simüle edilir.
>
> * **Çarpışma Algılama** : Matter.js, nesneler arasındaki çarpışmaları algılar ve bunlara göre tepki verir. Bu, oyunlar veya etkileşimli animasyonlar için önemli bir özelliktir.
> * **Esnek API** : Kütüphane, kullanıcıların kendi fizik kurallarını ve davranışlarını özelleştirmesine olanak tanır, bu sayede çok çeşitli projelere uyarlanabilir.
>
> * **Render Modülleri** : Basit ve hızlı bir şekilde sahnelemeler ve görsel temsiller için render modülleri sunar. Bu modüller, fizik simülasyonunun görsel olarak gösterilmesini kolaylaştırır.
>
> Matter.js, özellikle web tabanlı oyunlar, etkileşimli uygulamalar ve eğitim araçları gibi alanlarda kullanılır, çünkü kullanıcıların karmaşık matematik ve fizik hesaplamaları yapmadan dinamik ve etkileşimli deneyimler oluşturmasına imkan tanır.
