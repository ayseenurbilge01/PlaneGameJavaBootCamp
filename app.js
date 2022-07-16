var jet = document.getElementById("jet");
var board = document.getElementById("board");

/*
html sayfasında id'si jet ve board olan elemanlarımıza erişimi getElementById() metodu ile sağladık.
Daha sonra alt kısımda, komutlar ile uçağın sağa ve sola hareket etmesini sağlıyoruz.
*/

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";//left - 10 yani sola hareket etmek için bu if bloğu çalışmaktadır.
  }
  else if (e.key == "ArrowRight" && left <= 1150) {
    jet.style.left = left + 10 + "px";//left + 10 yani sağa hareket etmek için bu if bloğu çalışmaktadır.
  }
  
});


/*
Burada amacımız başlangıç konumunu random olarak belirlediğimiz yeni nesneler üretmektir. 3 saniyede bir yeni nesne üretilmektedir. 
*/ 

var generaterocks = setInterval(() => {
  var rock = document.createElement("div");
  rock.classList.add("rocks");
  var rockleft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  rock.style.left = Math.floor(Math.random() * 1100) + "px";

  board.appendChild(rock);
}, 3000);

/*
Burada ise oluşturduğumuz nesnelerin aşağı hareketini sağlamak için yazılmıştır. Hızı 100 ve px değeri +25 olarak belirlenmiştir.
*/

var moverocks = setInterval(() => {
  var rocks = document.getElementsByClassName("rocks");

  if (rocks != undefined) {
    for (var i = 0; i < rocks.length; i++) {
      var rock = rocks[i]; 
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      );

      rock.style.top = rocktop + 25 + "px";
    }
  }
}, 100);
