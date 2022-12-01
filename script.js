let body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text'),
    leftSide = body.querySelector('.left-side');
    rightSide = body.querySelector(".right-side");

    toggle.addEventListener('click' , function(){
        sidebar.classList.toggle("close");
        let w = window.innerWidth;
        if (w < 1020) {
            toggle.stopPropagation;
            toggle.preventdefault
        }
    });

    searchBtn.addEventListener("click" , function(){
        sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener('click' , function(){
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            modeText.innerText = "Light Mode"
        } else {
            modeText.innerText = "Dark Mode"
        };
    });

    modeSwitch.addEventListener('click' , function(){
        leftSide.classList.toggle('darkness');
    });
    modeSwitch.addEventListener('click' , function(){
        rightSide.classList.toggle('darkness');
    });

    window.addEventListener("resize", function() {
        let w = window.innerWidth;{

            if (w <1020) {
                sidebar.classList.add("close")
            }else{
                sidebar.classList.remove("close")
            }
        } 
    })
