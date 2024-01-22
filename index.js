let input = document.getElementById('input')
let string = "";

let button = document.querySelectorAll(".button")
Array.from(button).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == 'AC'){
        string = "";
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    } 
    else if(e.target.innerHTML == 'C'){
        string = string.substring(0,string.length-1);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'x'){
        // e.target.innerHTML = '*'
        string = string + '*';
        document.querySelector('input').value = string;
        
    }
    else{
    console.log(e.target.innerHTML);
   string = string + e.target.innerHTML ;
   
document.getElementById('input').value = string;
    }
  })  
})

