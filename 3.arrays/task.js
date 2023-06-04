function compareArrays (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false // Если массивы имеют разную длину, они точно не равны
  }

  return arr1.every((value, index) => value === arr2[index])
}

function getUsersNamesInAgeRange (people, gender) {
  if (people.length === 0) {
    return 0
  }
  if (gender !== 'мужской' && gender !== 'женский') {
    return 0
  }
  if (gender === 'мужской') {
    let usersMen = people.filter(people => people.gender === 'мужской')
    let menAge = usersMen.map(user => user.age)
    let sumOfAgesMen = menAge.reduce((acc, item) => acc + item, 0)
    return sumOfAgesMen / menAge.length
  } else {
    let usersWoman = people.filter(people => people.gender === 'женский')
    let womanAge = usersWoman.map(user => user.age)
    let sumOfAgesWoman = womanAge.reduce((acc, item) => acc + item, 0)
    return sumOfAgesWoman / womanAge.length
  }
}
