const arr = [0, 7, 9 , 2];

const max = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return false;
    }
  }
  return true;
}

const countries = [
  {"name":"Simpang","population":1807996},
  {"name":"Nador","population":1573034},
  {"name":"Kandy","population":1860806},
  {"name":"Salto","population":786733},
  {"name":"Lubochnia","population":657970},
  {"name":"Piteå","population":1762491},
  {"name":"Dabbūrīya","population":1316758},
  {"name":"Zhenlong","population":1701907},
  {"name":"Bailianhe","population":1247264},
  {"name":"Sahagún","population":1770202},
  {"name":"Zonghan","population":832096},
  {"name":"Aradac","population":642563},
  {"name":"Ust’-Isha","population":1870869},
  {"name":"Al Qarārah","population":1255056},
  {"name":"Zaqatala","population":1056786},
  {"name":"Pamplona/Iruña","population":776200},
  {"name":"Makīnsk","population":1272627},
  {"name":"Courtaboeuf","population":1275066},
  {"name":"Soras","population":1011560},
  {"name":"Singgit","population":879835},
  {"name":"Raksajaya","population":1368187},
  {"name":"Inowrocław","population":784051},
  {"name":"Claver","population":1935398},
  {"name":"Jaroměřice nad Rokytnou","population":1219137},
  {"name":"Rayside-Balfour","population":1569840},
  {"name":"Ngancar","population":1570326},
  {"name":"Yegor’yevsk","population":834590},
  {"name":"Maroa","population":929286},
  {"name":"Haenam","population":1746420},
  {"name":"Huichang","population":621469},
  {"name":"Barru","population":1614894},
  {"name":"Ngancar","population":1856285},
  {"name":"Nefta","population":909629},
  {"name":"Hovorany","population":968716},
  {"name":"Baise City","population":878786},
  {"name":"Jega","population":1430621},
  {"name":"Manwakh","population":1883900},
  {"name":"Qabqir","population":633978},
  {"name":"Kungsbacka","population":832328},
  {"name":"Krasnoarmeysk","population":1151669},
  {"name":"Tampa","population":945073},
  {"name":"Khlong Luang","population":1557518},
  {"name":"Karangbenda","population":629148},
  {"name":"Chowṉêy","population":1533464},
  {"name":"Vaxholm","population":1441356},
  {"name":"Tobi Village","population":710784},
  {"name":"Libas","population":685628},
  {"name":"Amherstburg","population":993042},
  {"name":"Longlou","population":1787909},
  {"name":"Ketian","population":732402}
]

const population = (arr) => {
  return arr.filter(item => {
    return item.population > 900000
  })
}

const everyPopulation = (array) => {
  return array.every(item => {
    return item.population > 1000000;
  })
}

const somePopulation = (array) => {
  return array.some(item => {
    return item.population > 1000000;
  })
}

console.log(somePopulation(countries));

const populationMap = (arr) => {
  return arr.map((item) => {
    const copyObj = {...item};
    copyObj.population *= 2;
    return copyObj
  })
}

const populationNew = (arr) => {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    const copyObj = {...arr[i]};
    copyObj.population *= 2;
    copy.push(copyObj);
  }
  return copy;
}

const populationEach = (arr) => {
  let copy = [];
  arr.forEach(item => {
    const copyObj = {...item};
    copyObj.population *= 2;
    copy.push(copyObj);
  })
  return copy;
}

const findCity = (arr) => {
  return arr.find(item => {
    return item.name === "Libas"
  });
}

const findPopulation = (arr) => {
  let summ = 0;
  arr.forEach(item => {
    summ += item.population;
  })
  return summ;
}

const findPopulationReduce = (arr) => {
  return arr.reduce((acc, value) => {
    return acc + value.population
  }, 0)
}

const findPopulationReduceNew = (arr) => {
  return arr.reduce((acc, value) => {
    let copy = {...acc};
    copy.population += value.population
    return copy;
  })
}

const sortByName = () => {
  let copyNew = [...countries];
  copyNew.sort((prev, next) => {
    const prevName = prev.name.toLocaleLowerCase()
    const nextName = next.name.toLocaleLowerCase()
    if (prevName > nextName) {
      return 1
    }
    if (prevName < nextName) {
      return -1
    }
    return 0
  })
  return copyNew;
}

const multiArray = [1, 2, [4, 5, [5, 6, [545, 434]]]];

const sumzMultiArray = (array) => {
  const newOneDimArr = array.flat(Infinity);
  return newOneDimArr.reduce((summ, item) => {
    return summ + item;
  }, 0)
}