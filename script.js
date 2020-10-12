var countnumber= 0;
function counter(number) {
     countnumber= countnumber + number;
      document.body.querySelector(".count").innerHTML=
      countnumber; 
}
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
 
for(var i=0; i<list.length; i++){
      var personEle = document.createElement("div");
   personEle.innerHTML=list[i].name + " "+list[i].age;
      document.body.appendChild(personEle);
  if(list[i].age>40) {
     personEle.style.color="red";}
  }
document.body.querySelector(".button1").addEventListener("click", function () {
  counter(1, "");
});