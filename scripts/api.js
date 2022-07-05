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
// Seleccion del top 10 de criptomonedas
const seleccionarCriptomonedas = document.querySelector('#criptomonedas');
  // Creando un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
  resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
  consultarCriptomonedas();
})
function consultarCriptomonedas(){
   const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
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

