window.onload = inicio ;

function inicio(){
  document.querySelector('.grid-container').insertAdjacentHTML("beforeend",`
  <button class="boton">
    click here
  </button>
  `);
  
  document.querySelector('.boton').onclick=acion;
}

function acion(){
  document.querySelector('.grid-container').style.backgroundColor="orange";

 for(let i=0; i<6; i++){
    color=document.querySelectorAll('.grid-item')[i].style.backgroundColor="green";
  }

  if(color === 'green'){
    alert('funciono')
  }
  else{
    console.log('error')
  }
}


