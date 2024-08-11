const panel=document.querySelectorAll(".panels")
panel.forEach((x)=>{
    x.addEventListener("click",function(){
        removeEventListener()
        x.classList.add('active')

    })
})
function removeEventListener(){
    panel.forEach((x)=>{
        x.classList.remove('active')
    })
}