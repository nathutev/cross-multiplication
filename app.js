let x;
let dotX;
let y;
let dotY;
let result;
let ansLabel = document.getElementById("ansLabel");
let errorLabel = document.getElementById("errorLabel");

function solve(){
  errorLabel.innerHTML = "";
  ansLabel.innerHTML = "";
  x = document.getElementById("x").value;
  dotX = document.getElementById("dotX").value;
  y = document.getElementById("y").value;
  dotY = document.getElementById("dotY").value;

  if(x == "" || dotX == "" || y == "" || dotY == ""){
    errorLabel.innerHTML = "Enter number/numbers";
  }

  else if(x === "x"){      
    dotX = Number(dotX);
    y = Number(y);
    dotY = Number(dotY);    
    result = y * dotX / dotY;

    if(isNaN(result)){
      errorLabel.innerHTML = "some kind of error, idk check your numbers"
    }
   
    else{
      ansLabel.innerHTML = result;
    };
  }

  else if(dotX === "x"){
    x = Number(x);
    y = Number(y);
    dotY = Number(dotY);
    result = x * dotY / y;

    if(isNaN(result)){
      errorLabel.innerHTML = "not a number"
    }

    else{
      ansLabel.innerHTML = result;
    };
  }

  else if(y === "x"){
    x = Number(x);
    dotX = Number(dotX);
    dotY = Number(dotY);
    result = x * dotY / dotX;
    if(isNaN(result)){
      errorLabel.innerHTML = "not a number"
    }

    else{
      ansLabel.innerHTML = result;
    };
  }

  else if(dotY === "x"){
    x = Number(x);
    dotX = Number(dotX);
    y = Number(y);
    result = y * dotX / x;
    if(isNaN(result)){
      errorLabel.innerHTML = "not a number"
    }

    else{
      ansLabel.innerHTML = result;
    };
  }

  else{
    errorLabel.innerHTML = "use <b>x</b> for variable"
  };
};
