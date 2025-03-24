

const ZAPATOS  = [
        {
          imagen: './assets/airmax1.png', 
          marca: 'Nike Original', 
          nombre: 'Nike AirMax1', 
          precio: '180.00€', 
          boton: '<button onclick="comprar(\'Air Max 270\')">Comprar</button>'
        },
        {
          imagen: './assets/nb6090.png', 
          marca: 'New balance', 
          nombre: 'NB9060', 
          precio: '80.00€', 
          boton: '<button onclick="comprar(\'UltraBoost 22\')">Comprar</button>'
        },
        {
          imagen: './assets/nikerevolution.png', 
          marca: 'Nike Original', 
          nombre: 'Nike Revolution', 
          precio: '80.00€', 
          boton: '<button onclick="comprar(\'RS-X3\')">Comprar</button>'
        },
        {
          imagen: './assets/forumbuckle.png', 
          marca: 'Adidas Original', 
          nombre: 'Forum Buckle', 
          precio: '100.00€', 
          boton: '<button onclick="comprar(\'Nano X1\')">Comprar</button>'
        },
        {
          imagen: './assets/campus.png', 
          marca: 'Adidas Original', 
          nombre: 'Campus', 
          precio: '120.00€', 
          boton: '<button onclick="comprar(\'574\')">Comprar</button>'
        },
        {
          imagen: './assets/nb327.png', 
          marca: 'New Balance', 
          nombre: 'NB327', 
          precio: '120.00€', 
          boton: '<button onclick="comprar(\'Chuck Taylor All Star\')">Comprar</button>'
        },
        {
          imagen: './assets/dunklow.png', 
          marca: 'Nike Original', 
          nombre: 'Dunk Low', 
          precio: '100.00€', 
          boton: '<button onclick="comprar(\'Old Skool\')">Comprar</button>'
        },
        {
          imagen: './assets/gazelle.png', 
          marca: 'Adidas Original', 
          nombre: 'Gazelle', 
          precio: '90.00€', 
          boton: '<button onclick="comprar(\'HOVR Phantom\')">Comprar</button>'
        },
        {
          imagen: './assets/airmaxsc.png', 
          marca: 'Nike Original', 
          nombre: 'Air Max SC', 
          precio: '150.00€', 
          boton: '<button onclick="comprar(\'Gel Kayano 27\')">Comprar</button>'
        },
        {
          imagen: './assets/handballspezial.png', 
          marca: 'Adidas original', 
          nombre: 'Handball Spezial', 
          precio: '120.00€', 
          boton: '<button onclick="comprar(\'Cortez Classic\')">Comprar</button>'
        },
        {
          imagen: './assets/airforce.png', 
          marca: 'Nike Original', 
          nombre: 'Air Force', 
          precio: '130.00€', 
          boton: '<button onclick="comprar(\'Superstar\')">Comprar</button>'
        },
        {
          imagen: './assets/nb9060.png', 
          marca: 'New balance', 
          nombre: 'NB 9060', 
          precio: '100.00€', 
          boton: '<button onclick="comprar(\'Future Rider\')">Comprar</button>'
        },
        {
          imagen: './assets/nb480.png', 
          marca: 'New Balance', 
          nombre: 'NB 9060', 
          precio: '100€', 
          boton: '<button onclick="comprar(\'Club C 85\')">Comprar</button>'
        },
        {
          imagen: './assets/fullforcelow.png', 
          marca: 'Nike Original', 
          nombre: 'Full Force low', 
          precio: '70.00€', 
          boton: '<button onclick="comprar(\'990v5\')">Comprar</button>'
        },
        {
          imagen: './assets/airmaxsc2.png', 
          marca: 'Nike Original', 
          nombre: 'Air Max SC', 
          precio: '160.00€', 
          boton: '<button onclick="comprar(\'Jack Purcell\')">Comprar</button>'
        },
        {
          imagen: './assets/handballspezial2.png', 
          marca: 'Adidas Original', 
          nombre: 'Handball Spezial', 
          precio: '140.00€', 
          boton: '<button onclick="comprar(\'Authentic\')">Comprar</button>'
        }
]
  const printZapatos = (ZAPATOS) => {
    const zapatosSection = document.querySelector("#Zapatos");
    zapatosSection.innerHTML = '';
  
    ZAPATOS.forEach(zapato => {
      const divZapatitos = document.createElement("div");
      
      const imgZapa = document.createElement("img");
      imgZapa.src = zapato.imagen;
      imgZapa.alt = zapato.nombre;
  
      const brandZapa = document.createElement("p");
      brandZapa.textContent = zapato.marca;
  
      const nameZapa = document.createElement("h3");
      nameZapa.textContent = zapato.nombre;
  
      const priceZapa = document.createElement("p");
      priceZapa.textContent = zapato.precio;
  
      const buyZapa = document.createElement("button");
      buyZapa.innerHTML = zapato.boton;
  
      divZapatitos.appendChild(imgZapa);
      divZapatitos.appendChild(brandZapa);
      divZapatitos.appendChild(nameZapa);
      divZapatitos.appendChild(priceZapa);
      divZapatitos.appendChild(buyZapa);
      zapatosSection.appendChild(divZapatitos);
    });
  }
  
printZapatos(ZAPATOS);
  
const flecha = document.getElementById("clickForm");

const form = document.getElementById("theForm");

flecha.addEventListener("click", () => {
  form.style.display = form.style.display === "none" ? "block" : "none";
});


const filtrarZapatos = () => {
for (const zapato of ZAPATOS) {
   const marcaSeleccionada = document.querySelector('#marca');

  if (brandZapa === marcaSeleccionada){
    return brandZapa;
  } else {
    return ('No hay elementos seleccionados')
  }
}
};

const filtrandozapas = document.getElementById("filtrar");

console.log(filtrandozapas);



/*
function filtrarZapatos () {

  const ZapatosMarca = document.getElementById('marca').value;
  const precioMaximo = document.getElementById('preciomáximo').value;
  
  console.log('Marca seleccionada:', ZapatosMarca);
  console.log('Precio máximo:', precioMaximo);

  const zapatosFiltrados = ZAPATOS.filter (zapato =>{
    const cumpleMarca = zapato.marca === ZapatosMarca;
    const precioZapato = zapato.precio.replace('€','').replace;
    const cumplePrecio = precioZapato<= precioMaximo;
   
    console.log(`Filtrando zapato: ${zapato.nombre}`);
    console.log(`Marca cumple: ${cumpleMarca}`);
    console.log(`Precio cumple: ${cumplePrecio}`);

    return cumpleMarca && cumplePrecio;
  });

mostrarZAPATOS(zapatosFiltrados);
};

filtrarZapatos();

function mostrarZAPATOS(ZAPATOS) {
  const lista = document.getElementById('Zapatos');
  lista.innerHTML= '';
  
  if (ZAPATOS.length===0) {
    alert('no se encontraron zapatos que coincidan con los filtros');
  }

  ZAPATOS.forEach(zapato=>{

    const divZapatitos = document.createElement("div");

    const imgZapa = document.createElement("img");
    imgZapa.src = zapato.imagen;
    imgZapa.alt = zapato.nombre;

    const brandZapa = document.createElement("p");
      brandZapa.textContent = zapato.marca;
  
      const nameZapa = document.createElement("h3");
      nameZapa.textContent = zapato.nombre;
  
      const priceZapa = document.createElement("p");
      priceZapa.textContent = zapato.precio;
  
      const buyZapa = document.createElement("button");
      buyZapa.innerHTML = zapato.boton;
  
      divZapatitos.appendChild(imgZapa);
      divZapatitos.appendChild(brandZapa);
      divZapatitos.appendChild(nameZapa);
      divZapatitos.appendChild(priceZapa);
      divZapatitos.appendChild(buyZapa);

      lista.appendChild(divZapatitos);

  });
  
}

let botonFiltro = document.getElementById("filtrar");
botonFiltro.addEventListener("click", filtrarZapatos);



console.log(ZapatosMarca);*/