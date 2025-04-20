// for loop
// for(let count=1;count<=5;count++){
//     console.log("Bhawna");
// }

// let sum=0;
// for(let i=1;i<=5;i++){ //i update it becomes 2 i check if i is less than 5 go to sum then check below
//     sum=sum+i;  //1case sum=0+1. print 1
//                 // 2case sum=1 + 2 print 3
//                 // and so on thn  final anwser will be sum=15
// }
// console.log("sum = ",sum);
// console.log("loop has ended");

// while loop same
// let a = 1; //initailize
// while(a<=5){ //condition chedk
//     console.log("a=",a); //print
//     a++; //update a=a+1; a=1+1 =2 than go to condition then condition chenk then print and so on.
// }

// let a=25;
// do{
//     console.log("a = ",a);
//     a++;
// }while(a <=25);
// in this loop if the conditon is false still it will excute one time at least
// in others loop if condition is false then it will never excute  

// for-of loop
// used in string or array for itrate
//not used for object
// let str ="Bhawna";
// let len=0;
// for(let i of str){
//     console.log("i =",i);
//     len++;
// }
// console.log("len =",len);

// for key in objvalue loop
const student={
    fullName:"Bhawna Magan",
    age: 21,
    cgpa: 8,
    isPass: true,
};
for (let key in student){
    console.log("key =",key,"value =",student[key]);
}