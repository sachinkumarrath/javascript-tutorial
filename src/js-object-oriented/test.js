const array = [1, 2, [3, [4, 5, [6, [7]]]]]

flattenArray

function flattenArray (inputArray) {
  const resultArray = []
  inputArray.array.forEach(element => {
    if (Array.isArray(element))  {
      resultArray.push(flattenArray(element).)
    } else {
      resultArray.push(element)
    }
  });
  return resultArray;
}

//-------------------------------------------------------------

const arrow = () => {
  console.log(this)
}

function normal() {
  console.log(this)
}

function test () {
  console.log(a, b)
  let a = 10
  var b = 20
} 

const x = {print: () => { console.log(this)}}

x.print() // x
const print = x.print
print() // x

//debounce


function debounce () {
 var tim
}







