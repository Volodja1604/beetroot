function filterSelect(){             
          const food_category=document.getElementsByClassName('product-box__item');
          const price=document.getElementById('price').value;
          const food=document.getElementById('food').value;
          for(let i=0;i<food_category.length;i++){
              if(Number(price==0)){
                if(food_category[i].dataset.food==food){
                food_category[i].style.display="block";
                }else{
                food_category[i].style.display="none";
                }
              }else if(food==0){
                if(Number(food_category[i].dataset.price)<=Number(price)){
                food_category[i].style.display="block";
                }else{
                food_category[i].style.display="none";
                }
              }else{
                if(food_category[i].dataset.food==food 
                    && Number(food_category[i].dataset.price)<=Number(price)){
                food_category[i].style.display="block";
                }else{
                food_category[i].style.display="none";
                }
              }
    
    
          };
        }
document.getElementById('food').addEventListener('change',filterSelect);
document.getElementById('price').addEventListener('change',filterSelect);
document.querySelector('.products-box').addEventListener('click',function(event){

   if(event.target.classList.contains('product-box__btn')==true){
    const price=Number(event.target.parentElement.firstChild.nextSibling.innerHTML.split(' ')[0]);
    const number=Number(event.target.previousElementSibling.firstElementChild.value);
    const sumPrice=price*number;
    let SumItem=Number(document.querySelectorAll('.red-info')[0].innerHTML);
    let totalPrice=Number(document.querySelectorAll('.red-info')[1].innerHTML);

    if(!isNaN(totalPrice) && !isNaN(SumItem)){
        sumItem+=number;
        totalPrice+=sumPrice;
    } else{
        sumItem=number;
        totalPrice=sumPrice;
    }
        document.querySelectorAll('.red-info')[0].innerHTML=sumItem;
        document.querySelectorAll('.red-info')[1].innerHTML=totalPrice;
        let boxes=document.querySelectorAll('.red-info')

         
   }
});

document.querySelector('.btn-check').addEventListener('click',function(){
    console.log('hll');
    document.getElementById('modal').style.display="block";
})
document.querySelector('.display-topright').addEventListener('click',function(){
    if (!email.validity.valid && !fullname.validity.valid) {
        alert('All fields are required');
    }else{
        document.getElementById('modal').style.display="none";
        document.querySelectorAll('.red-info')[0].innerHTML="XXX";
        document.querySelectorAll('.red-info')[1].innerHTML="XXX";
        
    }
    
})

    