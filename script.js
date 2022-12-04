let body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  leftSide = body.querySelector(".left-side");
rightSide = body.querySelector(".right-side");

toggle.addEventListener("click", function () {
  sidebar.classList.toggle("close");
});

toggle.addEventListener("click", function () {
  body.classList.toggle("changes");
});

modeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

modeSwitch.addEventListener("click", function () {
  leftSide.classList.toggle("darkness");
});
modeSwitch.addEventListener("click", function () {
  rightSide.classList.toggle("darkness");
});

window.addEventListener("resize", function () {
  let w = window.innerWidth;
  {
    if (w < 1020) {
      sidebar.classList.add("close");
    } else {
      sidebar.classList.remove("close");
    }
  }
});

window.addEventListener("resize", function () {
  if (sidebar.classList === "close") {
    body.classList.add("changes");
  } else {
    body.classList.remove("changes");
  }

  if (sidebar.classList.contains("close")) {
    body.classList.add("changes");
  } else {
    body.classList.remove("changes");
  }
});

// slider start
let dataSlider = [
  {
    id: 1,
    imageURL:
      "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg",
    title: "No pain, no gain. Shut up and train.",
  },
  {
    id: 2,
    imageURL:
      "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Good things come to those who sweat.",
  },
  {
    id: 3,
    imageURL:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    title: "Don't be afraid of being a beginner.",
  },
  {
    id: 4,
    imageURL:
      "https://cdn.pixabay.com/photo/2014/12/03/19/05/boxing-555735_960_720.jpg",
    title: "First they will laugh. Then they will copy. Don't give up.",
  },
  {
    id: 5,
    imageURL:
      "https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_960_720.jpg",
    title: "Push yourself because no one else is going to do it for you.",
  },
];

let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let sliderContent = document.getElementById("sliderContent");
let sliderIndex = 0;

function createDivElement(item) {
  let divElement = document.createElement("div");
  divElement.classList.add("slide");
  return divElement;
}

function createImgElement(item) {
  let img = document.createElement("img");
  img.classList.add("image-slide");
  img.setAttribute("src", item.imageURL);
  img.setAttribute("alt", item.title);
  return img;
}

function createHeader(item) {
  let header = document.createElement("h2");
  header.classList.add("h2header");
  header.textContent = item.title;
  return header;
}

function setSlide() {
  sliderContent.innerHTML = " ";
  let sliderDiv = createDivElement(dataSlider[sliderIndex]);
  let imgTag = createImgElement(dataSlider[sliderIndex]);
  let h2Tag = createHeader(dataSlider[sliderIndex]);

  sliderDiv.appendChild(imgTag);
  sliderDiv.appendChild(h2Tag);

  sliderContent.appendChild(sliderDiv);
}

arrowLeft.addEventListener("click", function () {
  if (sliderIndex == 0) {
    return;
  }

  sliderIndex--;
  setSlide();
});

arrowRight.addEventListener("click", function () {
  if (sliderIndex == dataSlider.length - 1) {
    return;
  }
  sliderIndex++;
  setSlide();
});

setSlide();
// slider end

