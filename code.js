/*
const s = "123456";
function despite(str) {
  const arr = [];
  let s = "";

  for (let i = 0; i < str.length; i++) {
    s = "";
    for (let k = 0; k < i; k++) {
      s = s.concat(str[k]).concat(".");
    }
    s = s.concat(str[i]);
    arr.push(s);
  }
  console.log(arr);
}
despite(s);

// 

const r = 1000
function devop(str) {
  let arr = []
  const all = []
  for(let i=1 ; i<str ; i++) {
    arr = []
    for(let k=1 ; k<i+1 ; k++){
      if(i%k === 0) {
        arr.push(k)
      }
    }
    if(arr.length === 2){
      all.push(i)
    }
  }
  console.log(all);
  console.log(all.length);
}
devop(r)

//

const ex = 5000
function dev(arg) {
  for(let i=0 ; i<arg ; i++){
    
  }
  console.log("ee"); 
}
dev()
*/

const seconds = new Date().getTime() / 1000;


setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500)

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
} 