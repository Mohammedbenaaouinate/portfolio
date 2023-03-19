console.log("hello world");
let ensemble = document.querySelectorAll("#lesicons span");
let images =document.querySelectorAll(".certifiacats div img");
console.log(images);
let current=0;
ensemble.forEach((item)=>{
    item.addEventListener('click',(e)=>{
              current=e.currentTarget.getAttribute('data-nbr');
              images.forEach((item)=>{
                if(item.getAttribute('data-num') == current){
                    item.classList.add('active');
                }else{
                    item.classList.remove('active');
                }
            });
        
    }
    )
});
//let images = document.querySelectorAll(".active");
// console.log(images);
