// Write your solution here!
    const cats =["Milo", "Otis", "Garfield"];
    
    //Array Function
    function array(){
        cats.length = 0;

        cats.push('Milo', 'Otis', 'Garfield');
    }
    function destructivelyAppendCat(){
        cats.push("Ralph")
    }
    function destructivelyPrependCat(){
        cats.unshift("Bob")
        }
    function destructivelyRemoveLastCat(){
        cats.pop('')
    }
    function destructivelyRemoveFirstCat(){
        cats.shift()
    }
  // create a new array 
function appendCat(){
    var newArray =cats.slice();
    newArray.push('Broom')
    return newArray;
  }
    function prependCat(){
        var newCat=cats.slice()
        newCat.unshift("Arnold")
        return newCat;
    }
    function removeLastCat(){
        var oldCat=cats.slice(0,-1)
        return oldCat;
    }
    function removeFirstCat(){
        var noCat=cats.slice(1)
        return noCat;
    }