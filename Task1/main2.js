const states = [
  {
    "state": "California",
    "city": "Los Angeles",
    "population": 100
  },
  {
    "state": "California",
    "city": "San Diego",
    "population": 200
  },
  {
    "state": "California",
    "city": "Ventura",
    "population": 150
  },
  {
    "state": "Florida",
    "city": "Venice",
    "population": 300
  },
  {
    "state": "Florida",
    "city": "Hollywood",
    "population": 500
  },
  {
    "state": "Georgia",
    "city": "Dalton",
    "population": 250
  },
  {
    "state": "California",
    "city": "San Diego",
    "population": 200
  }
]

let obj = {};

// for (const state of states){
//   if(!obj[state.state]){
//     obj[state.state] = state.population;
//   } else {
//     obj[state.state] = obj[state.state] + state.population;
//   }
// }

obj = states.reduce((acc, item) => {
  if (!acc[item.state]) {
    acc[item.state] = item.population;
  } else {
    acc[item.state] = acc[item.state] + item.population;
  }
  return acc;
}, {});

console.log(obj)