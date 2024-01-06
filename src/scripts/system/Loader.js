import * as PIXI from "pixi.js"; // PIXI kütüphanesini tüm modülleriyle birlikte import et

export class Loader {
    constructor(config) {
        this.config = config; // Loader için yapılandırma nesnesini sakla
        this.resources = {}; // Kaynakları saklamak için bir obje oluştur
    }

    preload() {
        return new Promise(resolve => { // Ön yükleme işlemini bir Promise olarak döndür
            for (const asset of this.config.loader) { // Yapılandırma içindeki her bir varlık için döngü
                let key = asset.key.substr(asset.key.lastIndexOf('/') + 1); // Varlık anahtarından dosya adını elde et
                key  = key.substring(0, key.lastIndexOf('.')); // Dosya adından uzantıyı çıkar

                if (asset.key.indexOf(".png") !== -1 || asset.key.indexOf(".jpg") !== -1) { // Eğer dosya tipi png veya jpg ise
                    PIXI.Assets.load(asset.data.default).then(res => { // PIXI ile varlığı yükle ve tamamlandığında
                        this.resources[key] = res; // Yüklenen varlığı kaynaklara ekle

                        if (Object.keys(this.resources).length >= this.config.loader.length) { // Tüm varlıklar yüklendiğinde
                            resolve(); // Promise'i çözümle
                        }
                    });
                }
            }
        });
    }
}
