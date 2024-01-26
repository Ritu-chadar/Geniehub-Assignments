//functions
/*//Functions.
function myfunction(x,y)
{
      return x*y;
}
console.log(myfunction(9,10));

const x = function displaysum(a,b) { return a+b};  
//Function Expression & Anonymous
console.log(x(9,15));


(function()
{
    console.log("Hiii There this is ritu!!!");
})();                                              //Function calling itself.

let p = myfunction(8,6);              //Function used as values
console.log(p);

const z = (g,h=10) => g*h;            //Arrow Function with default parameter.
console.log(z(9));


function sumofnumbers(...nums)                //Rest parameters.
{
    let sum = 0;
    for (let num of nums)
    {
        sum += num;
    }
    return sum;
}
console.log(sumofnumbers(12,4,6,7,56,32,19));*/


//Get Method
/*const song = {
    name : "Watermelon Sugar" , 
    Singer : "Harry Styles" , 
    Album : "Fineline",
get WhoSangwhat() { 
    return this.Singer + " sang " + this.name;
}
}
console.log(song.WhoSangwhat);*/


//Set Method
/*const song = {
    name : "History",
    Album : "MITAM",
    Singer : "" ,
    set SingerofSong(sin)
    {
        this.Singer = sin;
    }
}
song.SingerofSong = "One Direction";
console.log(song.Singer)*/






//Defining Object Property using Getter and Setter Methods.
/*const obj = {counter : 0};
Object.defineProperty(obj,"reset",{get : function() {this.counter=0;}});
Object.defineProperty(obj,"add",{set : function(value) {this.counter+=value;}});
Object.defineProperty(obj,"substract",{set : function(value) {this.counter-=value;}});
Object.defineProperty(obj,"increment",{get : function() {this.counter++;}});
Object.defineProperty(obj,"decrement",{get : function() {this.counter--;}});
obj.reset;
obj.add=10;
obj.increment;
obj.substract=5;
obj.decrement;
console.log(obj.counter);*/