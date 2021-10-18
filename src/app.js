console.log("Hello")
let dolarDun = 9.30
let dolarrBugun = 9.20
{
    let dolarDun = 9.10

}

console.log(dolarDun) //çıktı 9.10 olur let ile tanımlarsan scope'a göre çaışır. var deseydik eğer
                      //var global bir değişken gibi çalışır
   
const euroDun = 11.2
euroDun = 11 // bu yapılamaz
console.log(euroDun) //euroDun sadece okunabilir diye hata verir. const ile veri tanımlarsan
                      // artık buna değer atayamazsın.
                      
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//test commit 18102021 sss