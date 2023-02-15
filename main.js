const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const LayerSearch = $(".heading_search_layer")
const HeadingIconSearch = $(".heading_icon_search")
const HeadingLayer = $(".heading_search_layer")
const HeadingSearchSearch=$(".heading_search_search")

const HeadingIconBars = $(".heading_icon_bars")
const body = $("body")
const backToTop = $(".backToTop")
const HeadingNav = $(".heading_nav")



function handleHeadingSearch(){
    HeadingIconSearch.onclick = ()=>{
        const LayerSearch = $(".heading_search_layer")
        LayerSearch.classList.add("active")
    }
    HeadingLayer.onclick = ()=>{
        const LayerSearch = $(".heading_search_layer")
        LayerSearch.classList.remove("active")
    }
    HeadingSearchSearch.onclick = (e)=>{
        e.stopPropagation()
    }
}


function handleHeadingBars(){
    const HeadingBarsSide = $(".heading_bars_side")
    const HeadingBarsClose = $(".heading_bars_close")
    HeadingIconBars.onclick =(e)=>{
        HeadingBarsSide.classList.add("active")
        e.stopPropagation()
    }
    HeadingBarsClose.onclick =()=>{
       
        HeadingBarsSide.classList.remove("active")
    }
    HeadingBarsSide.onclick = (e)=>{
        e.stopPropagation()
    }
    body.onclick = ()=>{
        HeadingBarsSide.classList.remove("active")
    }
}

function handleHeadingSlide(){
    const slides = $$(".heading_slide")
    
    setInterval(()=>{
    for (let i = 0; i < slides.length;i++)
    slides[i].classList.toggle("active")


    },2000)
}

function handleScroll(){
    window.onscroll =()=>{
        var scrollPosition = window.pageYOffset;
        // Kiểm tra vị trí trang web
        if (scrollPosition > 600) {
        // Hiển thị nút "back-to-top" nếu trang web kéo xuống dưới 600px
        backToTop.style.display = "block";
        HeadingNav.classList.add("fixed_heading_nav")
        } else {
        // Ngược lại, ẩn nút "back-to-top"
        backToTop.style.display = "none";
        HeadingNav.classList.remove("fixed_heading_nav")
        }
    }
    backToTop.onclick = function(){
        console.log("BackToTop")
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}


handleHeadingSearch()
handleHeadingBars()
handleHeadingSlide()
handleScroll()