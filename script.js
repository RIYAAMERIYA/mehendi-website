function bookNow() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  let msg = "Hello, I want Mehendi booking.\nName: " + name + "\nCity: " + city;

  window.open("https://wa.me/9352046191?text=" + encodeURIComponent(msg));
}
