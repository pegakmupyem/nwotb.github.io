function Copy() {
  var hash = window.location.hash.slice(1);
  if (hash == "") {
  alert('Установите профиль Check Device Information (UDID) для начала!');
  } else {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  document.execCommand("copy");
  setTimeout(() => alert('✂️ UDID скопирован в буфер обмена, отправьте мне в телеграмм содержимое буфера обмена 📲 для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!'), 1000);
  setTimeout(function(){ window.location="https://t.me/pegakmop"; },1500);
  }
}
