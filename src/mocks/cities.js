let citiesList = [
    {name:"New York", code: 349727},
    {name:"Los Angeles", code: 347625},
    {name:"Sao Paulo", code: 858642},
    {name:"Buenos Aires", code: 7894},
    {name:"Quito", code: 129846},
    {name:"San Francisco", code: 347629},
    {name:"London", code: 328328},
    {name:"Paris", code: 623},
    {name:"Tokyo", code: 226396},
    {name:"Melbourne", code: 26216},
  ]  
  citiesList.sort((a,b) => a.name > b.name)

  export default citiesList;