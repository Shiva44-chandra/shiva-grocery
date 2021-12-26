let header=document.querySelector('.list-2');

 

window.onscroll= ()=>
{
 
  if(window.scrollY>150)
   {
    header.classList.add('active');
   } 
   else
   { 
    header.classList.remove('active');
   }
}