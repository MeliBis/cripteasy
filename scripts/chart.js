
import {  getApiOne, getApiTwo, getApiTree, getApiCGGlobal } from "./api.js";
//Coingecko
console.log('API coingeko');
const dataCG = await getApiCGGlobal();
console.log(dataCG);

console.log(dataCG[0].id, dataCG[1].id, dataCG[2].id, dataCG[3].id, dataCG[4].id);
const bestCrioptos = ()=>{
 let prueba = document.getElementById(`bestCrip`);
  let listBoots =listBoots+ `
  <ul class="list-group">
                    <li class="list-group-item">${dataCG[0]}</li>
                    <li class="list-group-item">${dataCG[1]}</li>
                    <li class="list-group-item">${dataCG[2]}</li>
                    <li class="list-group-item">${dataCG[3]}</li>
                    <li class="list-group-item">${dataCG[4]}</li>
                  </ul>`;
}
////CryptoCompare

////CryptoCompare dataCG.id

console.log('API crytocompare');
  const dataFAPIOne = await getApiOne();
  console.log(dataFAPIOne);
  const dataFAPIDos = await getApiTwo();
  console.log(dataFAPIDos);
//grafica Conectada a APITwo


export const ctx = document.getElementById("myChart").getContext("2d");
export const myChart = async () => {
  
  
  const dataFAPIThree = await getApiTree();
  console.log(dataFAPIThree);
  // document.getElementById("pruebaOne").innerHTML = data;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
export const ctxOne = document.getElementById("myChartApp").getContext("2d");
export const myChartOne = new Chart(ctxOne, {
  type: "line",
  data: {
    labels: [
      "cripto1",
      "cripto2",
      "cripto3",
      "cripto4",
      "scripto5",
      "scripto6",
    ],
    datasets: [
      {
        label: "Ranking en tiempo real",
        data: [20, 15, 45, 26, 76, 55],
        backgroundColor: ["#F4D22C", "#D9BA82"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

myChart();


