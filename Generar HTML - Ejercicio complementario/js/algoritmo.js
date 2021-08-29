escribirTitulares(publicaciones);

function escribirTitulares(publicaciones){

  for (let publicacion of publicaciones){

    let div=document.getElementById("publicacion");
    let h1=document.createElement("h1");
    let p=document.createElement("p");
    p.innerHTML = publicacion.p;
    h1.innerHTML = publicacion.titulo;
    div.appendChild(h1);
    div.appendChild(p);
    
  }
  
}

