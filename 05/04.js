//배열의 원소를 순회해서 실행하고 새배열로 반환
const num = [1, 2, 3, 4, 5];
//새 배열을 담을 변수 = 배열,map()
//const doubled=num.map(콜백함수);
const test = num.map(function (a, b, c) {
  console.log(`원소의 값:${a}`);
  console.log(`인덱스 번호:${b}`);
  console.log(`배열전체의 값:${c}`);
});
console.log(test);
const doubled = num.map((var1) => var1 * 2);
console.log(doubled);

//객체배열변환
const users = [
  { id: 1, name: "철수" },
  { id: 2, name: "영희" },
];

const names = users.forEach((user) => user.name);
console.log(names);

const items=num.map((n) => `<li>${n}</li>`);
console.log(items);

const youusers = [
  { id: 1, name: '철수' },
  { id: 2, name: '영희' },
  { id: 3, name: '민수' }
];
const use2 = youusers.filter(ewe => ewe.id === 2);
console.log(use2);

