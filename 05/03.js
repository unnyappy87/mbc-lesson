//구조분해 할당 Destructuring, 디스트럭처링
const user = {
  name: '철수',
  age: 20,
  job: '개발자'
};
//기존방식
//const name1 = user.name;
//const age1 = user.age;
//구조분해할당
const{ name, age } = user;
console.log(name,age);

//객체 구조분해
// 배열구조분해
const arr = [1, 2, 3, 4, 5];
//const a1 = arr[0];
//const a2 = arr[0 + 1];
//console.log(a1, a2);
const [n, m] = arr;
console.log(n,m);

/*---------------------*/
/*---------스프레드 연산자 (Spread Operator, 스프레드 오퍼레이터)------------*/
/*---------------------*/
// ========== 배열 스프레드 ==========
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
/* ------------배열합체--------------- */
const arr3=[...arr1,...arr2];
console.log(arr3);
//요소,원소추가
const arr4=['자바스크립트복습',...arr3,"점심"]
console.log(arr4);

// ========== 객체 스프레드 ==========
const use = { name: '철수', age: 20 };
//객체복사
const userCopy = {...use};
//속성추가
const user2 = {...userCopy,job: "취업희망자" };
console.log(user2);
//속성덮어쓰기
const user3={...user2, job: "개발자"};
console.log(user3);

//여러개 객체합치기
const a = { x: 1, y: 2 };
const b = { y: 1, z: 4 };
const c = {...a, ...b};
console.log(c);


