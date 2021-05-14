const input = document.querySelector(".search");
const btn = document.querySelector("#search-btn");
const table = document.querySelector(".table");

//function to insert data in table
const insertData = (d0, d1, d2, d3, d4, d5) => {
  console.log(d1);
  table.innerHTML = `<tr class="table-header">
  <th>State</th>
  <th>Confirmed</th>
  <th>Deceased</th>
  <th>Recovered</th>
  <th>Tested</th>
  <th>Vaccinated</th>
  </tr>`;
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
const stateNameAbr = (state) => {
  const names = {
    AN: "Andaman and Nicobar Islands",
    AP: "Andhra Pradesh",
    AR: "Arunachal Pradesh",
    AS: "Assam",
    BR: "Bihar",
    CG: "Chandigarh",
    CH: "Chhattisgarh",
    DN: "Dadra and Nagar Haveli",
    DD: "Daman and Diu",
    DL: "Delhi",
    GA: "Goa",
    GJ: "Gujarat",
    HR: "Haryana",
    HP: "Himachal Pradesh",
    JK: "Jammu and Kashmir",
    JH: "Jharkhand",
    KA: "Karnataka",
    KL: "Kerala",
    LA: "Ladakh",
    LD: "Lakshadweep",
    MP: "Madhya Pradesh",
    MH: "Maharashtra",
    MN: "Manipur",
    ML: "Meghalaya",
    MZ: "Mizoram",
    NL: "Nagaland",
    OR: "Odisha",
    PY: "Puducherry",
    PB: "Punjab",
    RJ: "Rajasthan",
    SK: "Sikkim",
    TN: "Tamil Nadu",
    TS: "Telangana",
    TR: "Tripura",
    UP: "Uttar Pradesh",
    UK: "Uttarakhand",
    WB: "West Bengal",
  };
  for (var key in names) {
    if (names[key] == state) {
      return key;
    }
  }
  return null;
};

const URL = "/covid-data";
const coviData = async (state, name) => {
  if (!state) return;
  const jsonData = await fetch(URL);
  const data = await jsonData.json();
  console.log(data[state]);
  const res = data[state];
  console.log(res.total);
  const total = res.total;
  insertData(
    name,
    total.confirmed,
    total.deceased,
    total.recovered,
    total.tested,
    total.vaccinated
  );
};
coviData();
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");

  const string = input.value;
  if (!string) return;
  table.classList.remove("hidden");
  console.log(string);
  const name = string[0].toUpperCase() + string.slice(1);
  if (stateNameAbr(name) == null) {
    alert("please provide a valid name!");
    input.value = "";
  } else {
    coviData(stateNameAbr(name), name);
  }
});
