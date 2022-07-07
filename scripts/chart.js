
import {  getApiOne, getApiTwo, getApiTree, getApiCGGlobal } from "./api.js";
//Coingecko
console.log('API coingeko');
const dataCG = await getApiCGGlobal();
console.log(dataCG);
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
    let propObjetoCG = "id";
  new Chart(ctx, {
  

    type: "bar",
    data: {
      labels: [
        dataCG[0].id.toUpperCase(),
        dataCG[1].id.toUpperCase(),
        dataCG[2].id.toUpperCase(),
        dataCG[3].id.toUpperCase(),
        dataCG[4].id.toUpperCase(),
      ],
      datasets: [
        {
          label: "Criptos Mejor pagadas",
          data: [
            dataCG[0].current_price,
            dataCG[1].current_price,
            dataCG[2].current_price,
            dataCG[3].current_price,
            dataCG[4].current_price,
          ],
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
// export const ctxOne = document.getElementById("myChartApp").getContext("2d");
// export const myChartOne = new Chart(ctxOne, {
//   type: "line",
//   data: {
//     labels: [
//       "cripto1",
//       "cripto2",
//       "cripto3",
//       "cripto4",
//       "scripto5",
//       "scripto6",
//     ],
//     datasets: [
//       {
//         label: "Ranking en tiempo real",
//         data: [20, 15, 45, 26, 76, 55],
//         backgroundColor: ["#F4D22C", "#D9BA82"],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

myChart();


(() => {
mejoresCriptos.innerHTML = `
  <ul class="list-group">
                    <li class="list-group-item">${dataCG[0].id.toUpperCase()} <img src="" alt=""> </li>
                    <li class="list-group-item">${dataCG[1].id.toUpperCase()}</li>
                    <li class="list-group-item">${dataCG[2].id.toUpperCase()}</li>
                    <li class="list-group-item">${dataCG[3].id.toUpperCase()}</li>
                    <li class="list-group-item">${dataCG[4].id.toUpperCase()}</li>
                  </ul>`;
})();