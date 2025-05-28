const faqs = document.querySelectorAll(".faq-cont")

faqs.forEach((faq) => {
    faq.addEventListener("click",()=>{
        // if(faq.classList.contains("active")){
        //     faq.classList.remove("active")
        // }else{
        //     faq.classList.add("active")
        faqs.forEach((item)=>{
            if (item !=faq){
                item.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});

// FORM VALIDATION OF FOOTER SECTION


$(document).ready(function(){
    $("#myform").validate({
        rules:{
            email :{
                required :true,
            }
        },
        messages:{
            email :{
                required : "Please enter your email address here"
            }
        }
    })
})
