export class Tools {
    static massiveRequire(req) { // Tools sınıfına ait static bir fonksiyon olan 'massiveRequire'
        const files = []; // Dosyaları saklamak için boş bir dizi oluştur

        req.keys().forEach(key => { // 'req' parametresindeki tüm anahtarları döngüye al
            files.push({ // 'files' dizisine her bir dosya için bir obje ekle
                key, // Dosya yolu veya adı
                data: req(key) // 'req' fonksiyonu ile dosyanın içeriğini al
            });
        });
        
        return files; // İşlenen dosyaları içeren diziyi döndür
    }
}

// massiveRequire fonksiyonu, require.context tarafından sağlanan bir fonksiyonu (req) alır. 
// Bu req fonksiyonu, belirli bir bağlamdaki dosyaları işlemek için kullanılır 
// (örneğin, bir klasördeki tüm resim veya ses dosyaları).

// Fonksiyon, bu bağlamdaki tüm dosyaları döngüye alır ve her bir dosya için dosyanın 
// yolunu (veya adını) ve içeriğini bir obje olarak files dizisine ekler.

// Sonuç olarak, massiveRequire fonksiyonu, belirtilen bağlamdaki 
// tüm dosyaların bir listesini ve bu dosyaların içeriklerini döndürür.