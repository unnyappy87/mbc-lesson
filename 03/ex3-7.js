/*primitive type[원시형] */
//number
//let num1 = 1;
//console.log('num1', num1, typeof num1);/*변수명,데이터,데이터타입 */
//let num2  = 2;
//console.log(typeof num2);
//let  sum = num1 + num2;
//console.log(sum);
//console.log(typeof sum);
//string
//let str = "'안녕'";
//let str2 = '"하세요"';
//console.log(typeof str + typeof str2);
//console.log(str + str2);
//console.log(str - str2);
////boolean
//let bool = true;
//console.log(bool);
//let isFalse = false;
//console.log(typeof isFalse);
// 고습언어 : 사람(성인)한테 쉬운언어 -> 프롬프트(자연어)
// 저급언어 : 컴퓨터한테 쉬운언어 -> 수학의 권위
// 자연어 : 사람한테쉬운것(3살아이)
// 사람이 읽기 쉬운언어로 분류
/*------------------------------ */
/*-------------참조형(reference type)--------------- */
/*------------------------------ */
//object(객체 -> 이름:데이터)
//{}객체리터럴
//let obj = {
//    name : "yuku" , 
//    age : 5 ,
//    log : function(){
//        console.log("/*💢💢💢💢💢💢*/");
//    },
//};
//console.log(typeof obj);
//console.log(obj.name);
//obj.log();
//array
//let arr=["yuku", 
//    5, 
//    function (emo) {
//        console.log(emo);    
//    },
//];
//console.log(typeof arr);
//console.log(arr[1]);
//console.log(arr[1+1]);
//console.log(arr[1]);
//arr[2]("💢💢💢💨💨💫💫");
//arr[2]("💤💤❤❤");
//
////function
//let fn=function () {
//    console.log("끝나길");   
//};
//console.log(typeof fn);
//fn();

//특수유형
let temp = null;  //값이 없음 temp 변수를 null로 초기화한다.
//템플릿 리터럴 : `${}` 텍스트와 변수를 간단히 연결
console.log(`temp 자료형:${typeof temp}/// temp의 데이터: ${temp}`);

let x; //  undefined(정의)선언은 되었으나 값이 할당되지 않음
console.log(` X의 자료형: ${typeof x}///x의 데이터: ${x}`);
