var store = "";
var count = 0;
function card(res) {
  store = store + res;
  count++;
  console.log(store.length);

  if (count === 4) {
    setTimeout(() => {
      if (!(store === "d8c2436e262448af3043fde3d652726a")) {
        alert("wrong");
        window.location.reload(true);
      } else {
        alert(
          "congratulations you found the flag : " + `csi-ctf{${store}}`
        );
        window.location.reload(true);
      }
    }, 300);
  }
}
function flip(event) {
  var element = event.currentTarget;
  if (element.className === "cards col-md-4 col-sm-6 col-12") {
    element.style.transform = "rotateY(180deg)";
  }
}