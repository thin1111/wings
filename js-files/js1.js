//  fap section 

$(".faq-plus").on('click',function(){
        $(this).parent().parent().find('.faq-body').slideToggle();
      });

// scholarship images start      
const tabImage = document.querySelectorAll(".img-section-layout img");
    const tabImageContainer = document.querySelector(".img-container img");
    for(let i = 0; i < tabImage.length; i++){
        tabImage[i].addEventListener("click", function(){
            let imgSrc = tabImage[i].getAttribute("src");
            tabImageContainer.src = imgSrc;
        })
    }


AOS.init();