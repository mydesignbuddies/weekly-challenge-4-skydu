var arrow = document.getElementsByClassName("arrow");
var item  = document.getElementsByClassName("item");
var panel = document.getElementsByClassName("panel");

item[1].classList.add("active");
arrow[1].style.transform = "rotate(180deg)";
panel[1].style.display   = "block";

for (let i = 0; i < arrow.length; i++) {
    item[i].onclick = () => {
        
        if (item[i].classList[1] === "active") {
            resetAccordion();
            return
        }

        resetAccordion();
        
        item[i].classList.toggle("active");
        arrow[i].style.transform = "rotate(180deg)";
        panel[i].style.display   = "block";
        
    }
}