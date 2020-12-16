function pageLoad() {

  let rootE = document.getElementById("root");
  // tömb
let myObjects = [
  { tag: "h1",
    content: "Kittlinger Ádám"
  },
  { tag: "p",
    content: "Frontent Developer"
  }
];
//console.log(myObjects);

//for (let i = 0; i < myObjects.length; i++)
for (myObject of myObjects) {
  rootE.insertAdjacentHTML("beforeend", `<${myObject.tag}>${myObject.content}</${myObject.tag}>`);
  //document.getElementById("root").insertAdjacentHTML("beforeend", document.createElement(myObject.tag));
  //
}
root.addEventListener("click", function(event){
  //event.target.classList.toggle("clicked");
  rootE.classList.toggle("clicked");
});
}
window.addEventListener("load", pageLoad);