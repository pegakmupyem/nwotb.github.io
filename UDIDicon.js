    function ilonaKep() {
      var hash = window.location.hash.slice(1);
      if (hash == "") {
      } else {
      var frame = document.querySelector('.frame');
      var ilona = document.createElement("IMG");
      ilona.src = "https://ipsw.me/assets/devices/" + hash + ".png";
      ilona.width = "111";
      frame.appendChild(ilona);
      var Url = document.getElementById("url");
      Url.innerHTML = window.location.search + hash;
      console.log(Url.innerHTML)
      };
    }
    ilonaKep()
