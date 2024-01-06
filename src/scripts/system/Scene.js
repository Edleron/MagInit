import * as PIXI from "pixi.js"; // PIXI kütüphanesini import et
import { App } from "./App"; // Uygulama yöneticisi sınıfını import et

export class Scene {
    constructor() {
        this.container = new PIXI.Container(); // Yeni bir PIXI Konteyner oluştur ve bunu sahne konteyneri olarak ata
        this.container.interactive = true; // Konteynerin etkileşime açık olmasını sağla
        this.create(); // Sahne oluşturma metodunu çağır (Alt sınıflarda tanımlanacak)
        App.app.ticker.add(this.update, this); // Sahnenin güncelleme metodunu PIXI'nin zamanlayıcısına ekle
    }

    create() {} // Sahne oluşturma metodunu tanımla (Özelleştirilecek)
    update() {} // Sahne güncelleme metodunu tanımla (Özelleştirilecek)
    destroy() {} // Sahne yok etme metodunu tanımla (Özelleştirilecek)

    remove() {
        App.app.ticker.remove(this.update, this); // Sahnenin güncelleme metodunu PIXI zamanlayıcısından çıkar
        this.destroy(); // Sahneyi yok etme metodunu çağır
        this.container.destroy(); // Sahnenin PIXI konteynerini yok et
    }
}
