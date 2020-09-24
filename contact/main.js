   //Get Element by id
let filterInput = document.getElementById('filterInput')


//Add event listener
filterInput.addEventListener('keyup' ,filterNames);

//Creating a funtion that will filter the names
function filterNames (){
   //get the value of the input

   let filterValue = document.getElementById('filterInput').value.toUpperCase();
    

   //get names ul
   let ul = document.getElementById('names');

   //get lis from the ul 
   let li = ul.querySelectorAll('li.collection-item');

   //loop through collection item lis
   for (let i = 0; i<li.length; i++){
       let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';

        }
   }
}