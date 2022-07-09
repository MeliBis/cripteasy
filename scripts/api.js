//coingeko
const apiCoinGecko = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
export const getApiCGGlobal = async () => {

  try {
    const getApiCG = await fetch(apiCoinGecko) ;
    const dataGec = await getApiCG.json();
    const getData = dataGec; 
    return getData
  } catch (error) {
    console.log('error con la Api conigecko');
  }
};


//CryptoCompare
//Se agregan estas variables 
//para los inputs 
const valueCripto= 'BTC';
const valueMoneda = "USD,JPY,EUR,MXN";

const apiCryptoCompare1 = `https://min-api.cryptocompare.com/data/price?fsym=${valueCripto}&tsyms=${valueMoneda}`;
export const getApiOne = async () => {
  try {
    const getApiCC = await fetch(apiCryptoCompare1);
    const dataOne = await getApiCC.json();
    const getData = dataOne;
    return getData;
  } catch (error) {
    console.log("hay un error en api One");
  }
};

const apiCryptoCompare2 = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DOGE&tsyms=USD,EUR,MXN`;

export const getApiTwo = async () => {
  try {
    const getApiCC = await fetch(apiCryptoCompare2);
    const dataDos = await getApiCC.json();
    const getData = dataDos;
    return getData;
  } catch (error) {
    console.log("hay un error en api Two");
  }
};
const moneda = "MXN";
const apiCryptoCompare3 = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR,${moneda}`;

export const getApiTree =async ()=>{
 try {
    const getApiCC = await fetch(apiCryptoCompare3);
    const dataTree = await getApiCC.json();
    const getData = dataTree;
    return getData;
  } catch (error) {
    console.log("hay un error en api Tree");
  }
};
// Seleccion del top 10 de criptomonedas - DANIEL - //

const seleccionarCriptomonedas = document.querySelector('#criptomonedas');
const seleccionarMoneda = document.querySelector('#moneda');
const formulario = document.querySelector('#cot-formulario');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}
  // Creando un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
  resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
  consultarCriptomonedas();
  formulario.addEventListener('submit', submitFormulario);
  seleccionarCriptomonedas.addEventListener('change', leerValor);
  seleccionarMoneda.addEventListener('change', leerValor);
})

function consultarCriptomonedas(){
   const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
   fetch(url)
    .then( respuesta => respuesta.json() )
    .then( resultado  => obtenerCriptomonedas(resultado.Data))
    .then( criptomonedas => selectCriptomonedas(criptomonedas) )
    //.catch( error => console.log(error));
}

function selectCriptomonedas(criptomonedas){
  criptomonedas.forEach( cripto => {
    const { FullName, Name} = cripto.CoinInfo;
    const option = document.createElement('option');
    option.value = Name;
    option.textContent = FullName;
    seleccionarCriptomonedas.appendChild(option);
  });
}

function leerValor(e){
  objBusqueda[e.target.name] = e.target.value;
  console.log(objBusqueda);
}

function submitFormulario(e) {
  e.preventDefault();
  //Validar que los input sean seleccionados
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === '' || criptomoneda === '') {
    mostrarAlerta('Ambos campos deben seleccionarse');
    return;
  }
  // Consulta de API con resultados
  consultarAPI();
}

function mostrarAlerta(msg){
  const existeError = document.querySelector('.error');

  if(!existeError){
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');
    //Mensaje de Error
    divMensaje.textContent = msg;
    formulario.appendChild(divMensaje);
    setTimeout( ()=> {
      divMensaje.remove();
    },  1500);
  }
}

function consultarAPI(){
  const { moneda, criptomoneda } = objBusqueda;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
  fetch(url)
    .then( respuesta => respuesta.json())
    .then( cotizacion => {
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    })
}

function mostrarCotizacionHTML(cotizacion){
  limpiarHTML();
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

  const precio = document.createElement('p');
  precio.classList.add('precio');
  precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement('P');
  precioAlto.innerHTML = `<p>El precio mas alto del día es: <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement('p');
  precioBajo.innerHTML = `<p>El precio mas bajo del día es: <span>${LOWDAY}</span>`;

  const variacionUltimaDia = document.createElement('p');
  variacionUltimaDia.innerHTML = `<p> Variación en las ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

  const ultimaActualizacion = document.createElement('p');
  ultimaActualizacion.innerHTML = `<p> Última actualización: <span>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(variacionUltimaDia);
  resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}

