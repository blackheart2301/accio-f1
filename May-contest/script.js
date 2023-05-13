let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    
    arr.map(function (student){
       if(student.marks>50){
        console.log(student.marks);
       }
    })
  }
  
  function PrintStudentsbyForEach() {
    
    arr.forEach((student)=>{
      if(student.marks>50){
        console.log(student.marks);
      }
    })
  }
  
  function addData() {
    
    let student= { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(student);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    
    arr=arr.filter(function(student){
       if(student.marks>50){
           return student;
       }
    })
   console.log(arr);
  }
  
  function concatenateArray() {
    
    let secondArr=[
      {id:101, name:"Kalvin", age:"20", marks:60},
      {id:115, name:"James", age:"21", marks:47},
      {id:123, name:"Rocky", age:"19", marks:76},
    ]
     
    arr=arr.concat(secondArr);
    console.log(arr);
  }