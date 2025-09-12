document.querySelectorAll(".book-btn").forEach(function(btn){
    btn.addEventListener("click",function(){
        let room=this.parentElement.querySelector("h4").innerText;
        let bookingForm=document.querySelector("#booking");
        let msg= document.createElement('p');
        msg.innerText="You have selected:"+room;

        msg.style.backgroundColor = "lightyellow";
        msg.style.padding = "5px";
        msg.style.fontWeight = "bold";
        msg.style.fontSize="20px";

        bookingForm.appendChild(msg);
        
    });
});