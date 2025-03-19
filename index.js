document.getElementById('complete').addEventListener('click',function(){
    
   let taskElement = document.getElementById('task');
   let numberElement = 6;

   document.getElementById('numver');

   let convertTask = parseInt(taskElement.innerText);
   let convertTitle = 24;
   parseInt(numberElement.innerText);

   if(convertTask >0){
    taskElement.innerText = convertTask -1;
    numberElement.innerText = convertTitle +1;
   }
})