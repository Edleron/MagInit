import { App } from "../system/App"; // Uygulama sistemi sınıfını import et
import { Scene } from "../system/Scene"; // Sahne sistemi sınıfını import et

export class Game extends Scene { // Scene sınıfından türeyen Game sınıfını tanımla
    create() {
        this.createBackground(); // Oyunun arka planını oluşturacak fonksiyonu çağır
    }

    createBackground() {
        this.bg = App.sprite("bg"); // 'bg' anahtarına sahip bir sprite oluştur ve 'bg' olarak sakla
        this.container.addChild(this.bg); // Oluşturulan arka plan sprite'ını sahne konteynerine ekle
        this.bg.width = window.innerWidth; // Arka planın genişliğini pencere genişliğine ayarla
        this.bg.height = window.innerHeight; // Arka planın yüksekliğini pencere yüksekliğine ayarla
    }
}
