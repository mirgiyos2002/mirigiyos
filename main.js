function findAge(name, currentYear, birthYear) {
  name = prompt('Ism');
  currentYear = +prompt('Hozirgi yil', 2021);
  birthYear = +prompt('Tugilgan yil', 1900);

  let x = currentYear - birthYear;
  console.log(`Salom ${name}, yoshingiz ${x} da`);
  return x;
}

// findAge();

// function myRandom(num) {
//   return Math.floor(Math.random() * num + 1);
// }

// console.log(myRandom(99));

// let quantity = +prompt('Misollarni miqdorini kiriting');

// for (let i = 1; i <= quantity; i++) {
//   let num1 = myRandom(10);
//   let num2 = myRandom(5);
//   let sym = myRandom(5);
//   let example = 0;

//   if (sym == 1) {
//     example = num1 + num2;
//     sym = '+';
//   } else if (sym == 2) {
//     example = num1 - num2;
//     sym = '-';
//   } else if (sym == 3) {
//     example = num1 * num2;
//     sym = '*';
//   } else if (sym == 4) {
//     example = num1 / num2;
//     sym = '/';
//   } else if (sym == 5) {
//     example = num1 % num2;
//     sym = '%';
//   }

//   let answer = +prompt(`${num1} ${sym} ${num2} = ?`);

//   if (example == answer) {
//     alert('Sizning javobingiz togri - ' + answer);
//   } else {
//     alert('Sizning javobingiz notogri - ' + answer + 'Togri javob ' + example);
//   }
// }


let com = Math.floor(Math.random() * 100 + 1);

// let com = +prompt('Son kiritng 1 dan 10 cha');

while (isNaN(com) || com < 1 || com > 100) {
  com = +prompt('faqat 1 dan 10 cha son kiritng');
}

console.log(com);

for (let i = 5; i > 0; i--) {
  let user = +prompt('Son toping 1 dan 100 cha ' + i + ' imkoniyat bor');

  if (com == user) {
    alert('12 pro yutdiz');
    break;
  } else if (com - user <= 3 && com - user >= -3) {
    alert('+3 yoki -3');
  } else if (com - user <= 6 && com - user >= -6) {
    alert('+6 yoki -6');
  } else if (com - user <= 10 && com - user >= -10) {
    alert('+10 yoki -10');
  } else if (com - user <= 15 && com - user >= -15) {
    alert('+15 yoki -15');
  } else if (com - user < 15 || com - user > -15) {
    alert('Vashe notogri');
  } else if (i == 1) {
    alert('Tugadi');
  }
}