import { Tools } from "../system/Tools"; // Tools sınıfını system/Tools yolundan import et
import { Game } from "./Game"; // Game sınıfını aynı klasörden import et

export const Config = {
    scenes: {
        Game // 'scenes' objesinde Game sınıfını sakla
    },
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/))
    // 'loader' için Tools.massiveRequire fonksiyonunu çağır ve belirtilen yoldaki dosyaları yükle
};

// require.context bir Webpack özelliğidir ve belirli bir klasördeki dosyaları dinamik olarak yüklemek için kullanılır. 
// Bu özellik, modül bağımlılıklarını önceden belirlemeye gerek kalmadan, 
// çalışma zamanında modülleri (dosyaları) yüklemenize olanak tanır.

// require.context ile belirtilen klasör yolundaki tüm dosyaları 
// (bu örnekte ./../../sprites/ yolunda bulunan .mp3, .png, .jpg veya .jpeg uzantılı dosyalar) 
// taramak ve yüklemek için kullanılır.

// require.context fonksiyonu, Webpack tarafından sağlanan özel bir özelliktir ve 
// belirli bir bağlamdaki modülleri otomatik olarak yüklemek için kullanılır.

// Tools.massiveRequire, bu dosyaları alır ve bunları 
// Config.loader içinde bir koleksiyon olarak saklar, 
// böylece uygulama içinde kolayca erişilebilir ve kullanılabilir hale getirir.