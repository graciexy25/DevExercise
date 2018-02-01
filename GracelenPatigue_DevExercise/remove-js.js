function setup() {
  // Write your code here.
    var images=document.getElementsByTagName("img");
    var l = images.length;
    for (var i = 0; i < l; i++) {
    images[i].parentNode.removeChild(images[i]);
}
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
