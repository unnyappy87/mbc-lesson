/*----------리액트에서 자주 사용하는 JS-------------*/
/*-----------------------*/
/*---------1. 변수--------------*/
/*
    1.1.var(사용 금지)
    1.2.let : 값의 재할당 가능
    1.3. cpnst : 값의 재할당 불가
*/
//{
let a = 0;
console.log("a를 0으로 초기화" + a);
a = 10;
console.log("a를 10으로 재할당");
const b = "철수";
//b = '영희';
console.log(b);
//const의 배열과 객체
const arr = [1, 2, 3];
console.log(arr[0]); // 1
arr[0] = "철수";
console.log(arr[2]); //철수
arr[2] = "mango";
console.log(arr[2]);
arr.push("5");
console.log(arr);
//arrr = [1];
//console.log(arr);

//************ */
//객체의 값변경
const obj = { a: 1 };
obj.a = 2; // 객체의 속성값 변경가능
console.log(obj.a);
obj.b = 3;
console.log(obj);

//}
//suger syntax
/**---------------------- */
/**----------화살표함수(람다)------------ */
/**---------------------- */
{
  const add1 = function (a, b) {
    return a + b;
  };
  //화살표 함수 - 기본형
  const add2 = (a, b) => {
    return a + b;
  };
  //화살표 함수 - 간단한형태
  const add3 = (a, b) => a + b;
  //화살표 함수 - 메개변수 한개
  const add4 = a => a * 2;
  //화살표 함수 - 메개변수 없다
  const add5 = () => "집에 가고싶다";
  //화살표 함수 - 반환값객체
  const getUser=id=>({id:id, name: "냥이"});
  console.log("add3",add3(5,90));
  console.log("add4",add4(1980));
  console.log("getUser",getUser(1980));
}
