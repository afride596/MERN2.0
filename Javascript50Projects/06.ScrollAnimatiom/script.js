const boxes=document.querySelectorAll(".box");
window.addEventListener("scroll",checkboxes)
checkboxes()
function checkboxes(){
    const triggerbottom= window.innerHeight /5 *4 ;
    
    console.log("this height"+triggerbottom);
    
    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;
        console.log("this height"+triggerbottom);
        console.log("this boxtop"+boxtop);
        if(triggerbottom>boxtop){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
})

}