// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effects when mouse stopped
  function mouseStopped(){
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
      });

//FAQ accordian effects
const arr = document.querySelectorAll('button.accordion')

arr.forEach(acc=>{
  acc.onclick=()=>{

    // close others
    document.querySelectorAll('button.accordion.active').forEach(act=>{
      if (act!==acc) {
        act.classList.remove('active')
        act.nextElementSibling.style.maxHeight = null
    } })

    let panel = acc.nextElementSibling
    panel.style.maxHeight = (acc.classList.toggle('active')) ? (panel.scrollHeight + "px") : null
} })

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

const showOnPx = 20;
const backToTopButton = document.querySelector(".back-to-top");
const rootElement = document.documentElement;

const scrollContainer = () => {
  return document.documentElement || document.body;
};


if (scrollContainer().scrollTop > showOnPx) {
  backToTopButton.classList.remove("hidden");
} else {
  backToTopButton.classList.add("hidden");
}

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

document.addEventListener("touchstart", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

backToTopButton.addEventListener("click", goToTop);
