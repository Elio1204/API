let cad2 = ` <div class = 'contenedor' style="m-3 ">`

for (let elemento of data) {
    cad2 = cad2 + `
    <div class="card" ml-3 style="width: 15rem;">
    <img src="${ elemento.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ elemento.name }</h5>
      <p class="card-text">${ elemento.species }</p>
      <a href="#" class="btn btn-primary">Más sobre el personaje</a>
    </div>
  </div>
    `
}





cad2 = cad2 + '</div>'
document.querySelector('main').innerHTML = cad2