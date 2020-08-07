// will print 3 3 3
for(var x = 0; x < 3; x++) {
  setTimeout(() => {
    console.log(x)
  }, 1000)
}

// will print 0 1 2
for(let x = 0; x < 3; x++) {
  setTimeout(() => {
    console.log(x)
  }, 1000)
}

// will print 0 1 2
for(var x = 0; x < 3; x++) {
  (function(x) {
    setTimeout(() => {
      console.log(x)
    }, 1000)
  })(x);
}

//
for(var x = 0; x < 3; x++) {
  setTimeout(() => {
    console.log(x)
  }, 1000)
}