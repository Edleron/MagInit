import * as PIXI from "pixi.js"; // PIXI kütüphanesini import et
import { App } from "./App"; // Uygulama yöneticisi sınıfını import et

export class ScenesManager {
    constructor() {
        this.container = new PIXI.Container(); // Yeni bir PIXI Konteyner oluştur
        this.container.interactive = true; // Konteynerin etkileşime açık olmasını sağla
        this.scene = null; // Aktif sahne için başlangıçta null bir değer ata
    }

    start(scene) {
        if (this.scene) { 
            this.scene.remove(); // Eğer aktif bir sahne varsa, onu kaldır
        }

        this.scene = new App.config.scenes[scene](); // Yeni sahneyi başlat ve aktif sahne olarak ata
        this.container.addChild(this.scene.container); // Yeni sahnenin konteynerini ana konteynere ekle
    }
}
