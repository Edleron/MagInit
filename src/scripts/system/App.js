import * as PIXI from "pixi.js"; // PIXI kütüphanesini tüm modülleriyle birlikte import et
import { Loader } from "./Loader"; // Loader sınıfını Loader.js dosyasından import et
import { ScenesManager } from "./ScenesManager"; // ScenesManager sınıfını ScenesManager.js dosyasından import et

class Application {
    run(config) {
        this.config = config; // Uygulama yapılandırmasını sakla
        this.app = new PIXI.Application({resizeTo: window}); // Yeni bir PIXI uygulaması oluştur ve pencereye sığdır
        document.body.appendChild(this.app.view); // Oluşturulan PIXI görünümünü HTML body'ye ekle

        // Process -> Loader (içinde config'i gönder) && Config ile Tools beraber çalışıp -> Loader içerisinde resources doldurulur.
        this.loader = new Loader(this.config); // Yapılandırmayla yeni bir Loader örneği oluştur
        this.loader.preload().then(() => this.start()); // Loader ile ön yükleme yap ve tamamlandığında başla

        this.scenes = new ScenesManager(); // Yeni bir ScenesManager örneği oluştur
        this.app.stage.addChild(this.scenes.container); // ScenesManager konteynerini PIXI sahnesine ekle
    }

    res(key) {
        return this.loader.resources[key]; // Belirtilen anahtarla kaynakları döndür
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key)); // Belirtilen anahtarla bir PIXI Sprite nesnesi oluştur
    }

    start() {
        this.scenes.start("Game"); // Oyun sahnesini başlat
    }
}

export const App = new Application(); // Application sınıfının bir örneğini oluştur ve dışa aktar
