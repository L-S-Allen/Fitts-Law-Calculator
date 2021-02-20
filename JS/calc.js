
let formula = 0; //defaults to the first formula

function calc(){
  //get the variable values from the input fields
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let w = document.getElementById('W').value;
  let d = document.getElementById('D').value;

  if(a === "" || b === "" || w === "" || d === ""){
    document.getElementById('answer').innerHTML = 'Error: empty or incorrect input. Please enter a number value for each variable.';
    return;
  }
  else {
    a = Number(a);
    b = Number(b);
    w = Number(w);
    d = Number(d);
  }

  //check the chosen formula, default is the first option if none are chosen by the user
  let ans = 0;
  switch (formula) {
    case 1:
    ans = plain(a,b,w,d);
    break;
    case 2:
    ans = multiplyByTwo(a,b,w,d);
    break;
    default:
    ans = plusOne(a,b,w,d);
    break;
  }

  if(Number.isNaN(ans)){
    ans = 'No valid solution, please check there is no missing or incorrect input.';
  }
  document.getElementById('answer').innerHTML = ans;
}

//changes the global formula indicator, and adds a coloured border to the selected formula.
function chooseFormula(num){
  formula = num;

  let orange = "2px solid rgb(255, 191, 168)";
  let white = "2px solid white";

  let ids = ['plusOne', 'plain', 'multiplyByTwo'];

  for(i = 0; i < ids.length; i++){
    if(i === num){
      document.getElementById(ids[i]).style.border = orange;
    }
    else {
      document.getElementById(ids[i]).style.border = white;
    }
  }
}

function plusOne(a, b, w, d){
  //calculate Fitts Law: MT = a + b * log2(d/w+1)
  let ans = a + (b * Math.log2((d/w)+1));
  return ans;
}

function plain(a, b, w, d){
  //calculate Fitts Law: MT = a + b * log2(d/w)
  let ans = a + (b * Math.log2((d/w)));
  return ans;
}

function multiplyByTwo(a, b, w, d){
  //calculate Fitts Law: MT = a + b * log2(d/w *2)
  let ans = a + (b * Math.log2((d/w)*2));
  return ans;
}
