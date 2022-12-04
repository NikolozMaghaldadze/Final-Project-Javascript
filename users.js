// users from server
"use strict"
let currentPages = 1;
let totalPages;

function getUsersPages(currentPages) {
  fetch("https://reqres.in/api/users?page=" + currentPages, {
    method: "GET",
  })
    .then(function (responseText) {
      if (responseText.status !== 200) {
        throw responseText.status;
      }

      return responseText.json();
    })

    .then(function (responseJS) {
      let ulList = document.createElement("ul");
      ulList.classList.add("ul-list");
      ulList.setAttribute("id", "ul-list");
      const fragment = new DocumentFragment();

      responseJS.data.forEach((x) => {
        let list = document.createElement("li");
        list.classList.add("list-wrap");
        let image = document.createElement("img");
        image.src = x.avatar;
        ulList.appendChild(image);

        list.textContent = `${x.first_name} ${x.last_name}`;
        fragment.appendChild(list);
      });
      ulList.appendChild(fragment);
      document.getElementById("userinfo-2").innerHTML = "";
      document.getElementById("userinfo-2").appendChild(fragment);
      document.getElementById("userinfo-2").appendChild(ulList);
      totalPages = responseJS.total_pages;
    })
    .catch(function (error) {
      if (error == 404) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Page not Found!";

        document.getElementById("userinfo-1").appendChild(paragraph);
      }
      if (error == 505) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Page not Found!";

        document.getElementById("userinfo-1").appendChild(paragraph);
      }
    });
}

document.getElementById("next").addEventListener("click", function () {
  if (currentPages == totalPages) {
    return;
  }
  currentPages += 1;
  getUsersPages(currentPages);
});

document.getElementById("previous").addEventListener("click", function () {
  if (currentPages == 1) {
    return;
  }
  currentPages -= 1;
  getUsersPages(currentPages);
});

getUsersPages(currentPages);
// users from section


// cookies & accordion
"use strict";

let form = document.getElementById("formWrap");

form.addEventListener('submit' , function(event){
    event.preventDefault();

    let checkbox = document.getElementById('check');

    if (checkbox.checked) {
        let username = document.getElementById('username1').value;
        Cookies.set('saveUsername', username);
    }else{
        Cookies.remove('saveUsername');
    }

    event.target.submit();
});

let savedUsername = Cookies.get('cookiesName');

if (savedUsername ){
    document.getElementById("username1").value = savedUsername;
}


// accordion

let accordion = document.querySelectorAll('#Ghilaki');
let paragraph =document.querySelectorAll('.info-text');



accordion.forEach(x => {
    x.addEventListener('click' , function(){
        x.classList.toggle('active');
    });
    paragraph.forEach(y => {
        x.addEventListener('click' , function(){
            y.classList.toggle('active-1');
        });
    })
});
// cookies & accordion