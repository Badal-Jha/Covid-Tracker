const table = document.querySelector(".table");

const URL = "/covid-data";

table.innerHTML = `<tr class="table-header">
<th>State</th>
<th>Confirmed</th>
<th>Deceased</th>
<th>Recovered</th>
<th>Tested</th>
<th>Vaccinated</th>
</tr>`;
//make function to insert data in table
const insertData = (d0, d1, d2, d3, d4, d5) => {
  console.log(d1);

  var rowData = `<tr>
  
  <td data-lable="State" class="state"> ${d0}</td>
  <td data-lable="Confired">${d1}</td>
  <td data-lable="Deceased">${d2}</td>
  <td data-lable="Recovered"> ${d3}</td>
  <td data-lable="Tested">${d4}</td>
  <td data-lable="Vaccinated">${d5}</td>
  </tr>`;

  table.innerHTML += rowData;
};
const coviData = async () => {
  const jsonData = await fetch(URL);
  const data = await jsonData.json();
  console.log(data);

  Object.keys(data).forEach((key) => {
    console.log(key);
    console.log(data[key].total);
    const total = data[key].total;
    console.log(total.confirmed);
    insertData(
      key,
      total.confirmed,
      total.deceased,
      total.recovered,
      total.tested,
      total.vaccinated
    );
  });
};
coviData();
