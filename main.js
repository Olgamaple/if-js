let user = 'John Doe';
console.log(user);
const student = 'Olga';
console.log(student);
user = student; // присвоили значение  переменной student переменной user, в user 'Olga'
console.log(user);
let test = 1;
while (test <= 1) {
  test += 1; // 21 строка, преобразование числа в строку произошло соединение 2-х строк рядом
}
console.log(test);
test -= 1; // 20 число, строка преобразовалась в число произошло вычетание из числа 21 -1
console.log(test);
if (test !== 20) {
  console.log(false);
} else {
  console.log(true);
}
const num = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < num.length; i++) {
  if (num[i] > 5 && num[i] < 10) {
    console.log(num[i]);
  }
}
let result = 1;
const arr1 = [2, 3, 5, 8];
for (let i = 0; i < arr1.length; i++) {
  result *= arr1[i];
}
console.log(result);
const arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
}
const str = 'deified';
const isPalindrome = (inStr) => {
  inStr = inStr.toLowerCase().replace(/\s/g, '');
  for (let i = 0; i < inStr.length; i += 1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(str));

const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};
console.log(min(5, 20));

function max(a, b) {
  return a > b ? a : b;
}

console.log(max(25, 100));

const arr2 = [10, 25, 70];
console.log(Math.max(...arr2));

const arr3 = [12, 53, 20, 18, 22, 10, 43, 57, 50, 1];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 10 === 0) {
    arr3[i] += '';
    arr3[i] = arr3[i].replaceAll('0', 'zero');
  }
}
console.log(arr3);
const arr4 = [12, 53, 20, 18, 22, 10, 43, 57, 50, 1];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 10 === 0) {
    arr4[i] = arr4[i].toString().replaceAll('0', 'zero');
  }
}
console.log(arr4);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));

const arr5 = [12, 53, 20, 18, 22, 10, 43, 57, 50, 1];
const func = (array) => {
  for (let i = 0; i < arr.length; i++) {
    if (array[i] % 10 === 0) {
      array[i] = array[i].toString().replaceAll('0', 'zero');
    }
  }
  return array;
};
console.log(func(arr5));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const pGroup = document.querySelectorAll('p');
const f1 = () => {
  let k = 0;
  return event => {
    event.target.style.color = colors[k];
    k++;
    if (k === colors.length) {
      k = 0;
    }
  };
};
for (let i = 0; i < pGroup.length; i++) {
  pGroup[i].addEventListener('click', f1());
}
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
const replaceStrForSearch = dataStr => dataStr.toLowerCase().replaceAll(' ', '');
const search = searchStr => {
  const searchStrReplaced = replaceStrForSearch(searchStr);
  const searchResult = [];
  data.forEach(object => {
    const string = `${object.country}, ${object.city}, ${object.hotel}`;
    if (replaceStrForSearch(string).includes(searchStrReplaced)) {
      searchResult.push(string);
    }
  });
  return searchResult;
};
console.log(search('ber '));
const search1 = searchStr => (
  data
    .filter(object => (
      object.country.includes(searchStr)
      || object.city.includes(searchStr)
      || object.hotel.includes(searchStr)
    ))
    .map(object => `${object.country}, ${object.city}, ${object.hotel}`)
);
console.log(search1('Ber'));

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (dayOfWeek >= daysInWeek) {
    throw new Error('Invalid data');
  }
  const daysWithoutTail = daysInMonth + dayOfWeek;
  const iterations = daysWithoutTail + (daysInWeek - (daysWithoutTail % daysInWeek));
  let currentDay = daysInMonth - dayOfWeek;
  let subArrayIndex = 0;
  const calendarMonth = [];
  for (let i = 1; i <= iterations; i++) {
    if (!calendarMonth[subArrayIndex]) {
      calendarMonth[subArrayIndex] = [];
    }
    if (calendarMonth[subArrayIndex].length === daysInWeek) {
      if (calendarMonth[subArrayIndex][calendarMonth[subArrayIndex].length - 1] === daysInMonth) {
        break;
      }
      subArrayIndex += 1;
      calendarMonth[subArrayIndex] = [];
    }
    currentDay += 1;
    if (currentDay > daysInMonth) {
      currentDay = 1;
    }
    calendarMonth[subArrayIndex].push(currentDay);
  }
  return calendarMonth;
};
const calendarMonth = getCalendarMonth(30, 7, 4);
console.log(calendarMonth);
const languageData = [{
  firstName: 'James',
  lastName: 'Gosling',
  yearCreation: 1995,
  languageName: 'Java',
},
{
  firstName: 'Brendan',
  lastName: 'Eich',
  yearCreation: 1995,
  languageName: 'JavaScript',
},
{
  firstName: 'Guido',
  lastName: ' van Rossum',
  yearCreation: 1991,
  languageName: 'Python',
},
{
  firstName: 'Andy',
  lastName: 'Rubin',
  yearCreation: 2008,
  languageName: 'Android',
},
];

class Man {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Creator extends Man {
  constructor(firstName, lastName, yearCreation, languageName) {
    super(firstName, lastName);
    this.languageName = languageName;
    this.yearCreation = yearCreation;
  }

  get year() {
    return new Date().getFullYear() - this.yearCreation;
  }
}

class Creators {
  constructor(dataCr) {
    this.creators = dataCr
      .map(({
        firstName,
        lastName,
        yearCreation,
        languageName,
      }) => new Creator(firstName, lastName, yearCreation, languageName));
  }

  getInfo() {
    this.creators.sort((prev, next) => prev.year - next.year);
    const array = [];
    this.creators.forEach((item) => {
      array.push(`${item.fullName} - ${item.languageName}, ${item.year} years ago`);
    });
    return array;
  }
}

console.log(new Creators(languageData).getInfo());

function palindrome1(dataStr) {
  dataStr = dataStr.toLowerCase().replace(/\s/g, '');
  return dataStr === dataStr.split('').reverse().join('');
}

console.log(palindrome1('ababa'));

function palindrome2(inStr) {
  const len = Math.floor(inStr.length / 2);
  inStr = inStr.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < len; i += 1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome2('а роза упала на лапу азора'));
