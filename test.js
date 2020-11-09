const _ = require('lodash');


function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

// function process(picture) {
//     console.log(`Processing ${picture}`);
// }

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
// download(url, (p) => console.log(`Processing ${p}`));

// download(url, function(p){
//         console.log(`Processing ${p}`);}
//          );

function first(callba){
  setTimeout(() => {
    console.log("first");
    callba();
  },1000)
};

function second(){
  console.log("second")};
              

// first(second)

var string = "Welcome to this Javascript Guide!";
//console.log(reverseString(string))

function reverseString(string){
  var res = string.split(" ");
  var i;
  var j;

  for (j=0;j<res.length;j++)
  {
    var reverseWord = "";

    for( i = res[j].length - 1; i >= 0; i--){
        reverseWord = reverseWord + res[j][i] 
    }
    res[j] = reverseWord;

  }

  var final = res.join(" ")

  return final
}


//console.log(duplicate([1, 2, 3, 4, 5])); // [1,2,3,4,5,1,2,3,4,5];

function duplicate(arr){
  arr.forEach(item => arr.push(item))
  return arr;
}

var firstWord = "Marry";
var secondWord = "aMrry";

console.log(isAnagram(firstWord, secondWord)); // true

function isAnagram(one, two){
  if(one.length != two.length)
    return false
  var i; var count;
  let oneMap = new Map()
  let twoMap = new Map()
  for(i = 0; i<one.length; i++)
  {
    if(oneMap.has(one[i])){
      count = oneMap.get(one[i]) + 1;
      oneMap.set(one[i], count)
    }
    else
      oneMap.set(one[i], 1)
    
   if(twoMap.has(two[i]))
     twoMap.set(two[i], twoMap.get(two[i])+1)
   else
    twoMap.set(two[i], 1)
    
  }
  console.log(oneMap)
  console.log(twoMap)
 
  for(i = 0; i<one.length; i++)
  {
   if(oneMap.has(one[i]) && twoMap.has(one[i]) && oneMap.get(one[i]) === twoMap.get(one[i]))
     console.log("");
  else
    return false
  }
  return true
}