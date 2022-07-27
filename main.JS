/* Start header */

const myLi = document.querySelectorAll(".links ul li");
const myLis = Array.from(myLi);

myLis.forEach((element) => {
  element.addEventListener("click", function () {
    myLis.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
    document.querySelector(element.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let burrBtn = document.querySelector("header .head-one .links i");
let myUlsS = document.querySelector(".links ul");
burrBtn.onclick = function (e) {
  myUlsS.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== myUlsS && e.target !== burrBtn) {
    if (myUlsS.classList.contains("open")) {
      myUlsS.classList.toggle("open");
    }
  }
});
myUlsS.onclick = function (el) {
  el.stopPropagation();
};

/* /////////////////////////////////////////////////////////////////// */

let myHead = document.querySelector("header");
let myImages = [
  "image/kljasd.jpg",
  "image/firstbackground.jpg",
  "image/jkfa.jpg",
  "image/kjhadsfk.jpg",
  "image/backhander.jpeg",
];

/* Start headRoom */

let changeYes = document.querySelector(".background .yes");
let changeNo = document.querySelector(".background .no");
let changeIsT = true;

function randomizeImages() {
  if (changeYes.classList.contains("active")) {
    if (changeIsT === true) {
      let startChangeBackground = setInterval(function () {
        let myRandomImage = Math.floor(Math.random() * myImages.length);
        myHead.style.backgroundImage = `url(${myImages[myRandomImage]})`;
        if (changeNo.classList.contains("active")) {
          clearInterval(startChangeBackground);
        }
      }, 6000);
    }
  }
}
randomizeImages();

/* /////////////////////////////////////////////////////////////////// */

let sitting = document.querySelector(".sitting");
let gearIcon = (document.getElementById("i3").onclick = function () {
  this.classList.toggle("fa-spin");
  sitting.classList.toggle("open");
});

/* /////////////////////////////////////////////////////////////////// */

let myChangeColorFonts = document.querySelectorAll(".colors ul li");
let changeColor = Array.from(myChangeColorFonts);

changeColor.forEach(function (element) {
  element.addEventListener("click", function () {
    changeColor.forEach(function (ele) {
      ele.classList.remove("active");
    });
    element.classList.add("active");
    document.documentElement.style.setProperty(
      "--second-color",
      element.dataset.color
    );
    localStorage.setItem("storage-color", element.dataset.color);
  });
});

/* Start Change color with LocalStorage */

let colorStorage = localStorage.getItem("storage-color");

if (colorStorage !== null) {
  document.documentElement.style.setProperty("--second-color", colorStorage);

  document.querySelectorAll(".colors ul li").forEach(function (ele) {
    ele.classList.remove("active");
    if (ele.dataset.color === colorStorage) {
      ele.classList.add("active");
    }
  });
}

let paragraph = document.querySelector(".myP");
let myText =
  "I take 20 days to learn js with ES2022 with DOM and Bom..., and in my exams days i learn js Lorem ipsum dolor sitamet consectetur adipisicing";

setTimeout(function () {
  let i = 0;
  let startType = setInterval(function () {
    paragraph.innerHTML += myText[i];
    i += 1;
    if (i >= myText.length) {
      clearInterval(startType);
    }
  }, 100);
}, 1000);

/* end Change color with LocalStorage */

/* Start random background option */

let backgroundOption = document.querySelectorAll(".background .option span");

backgroundOption.forEach(function (element) {
  element.addEventListener("click", function () {
    backgroundOption.forEach(function (ele) {
      ele.classList.remove("active");
    });
    element.classList.add("active");
  });
});
/* Start fixed */
let test = document.querySelector(".testimonials");

myFixedInfo = document.querySelector(".fixed");
myFixedInfo.onmousemove = function () {
  myFixedInfo.style.bottom = "-6px";
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= myHead.offsetTop + 600) {
    myFixedInfo.style.bottom = "-290px";
  } else {
    myFixedInfo.style.bottom = "-340px";
  }
  if (window.scrollY >= test.offsetTop - 200) {
    myFixedInfo.style.bottom = "-340px";
  }
});
myFixedInfo.onmouseleave = function () {
  myFixedInfo.style.bottom = "-290px";
};

/* End fixed */

/* End random background option */

/* End header */

/* Start sections */
let mySection = document.querySelector("section");
let mySkew = document.querySelector(".skew");

window.addEventListener("scroll", function () {
  if (this.scrollY >= mySection.offsetTop) {
    mySkew.style.cssText = "width:400px; height:260px";
  }
});

let myImg = document.querySelector("section .boy img");

window.addEventListener("scroll", function () {
  if (this.scrollY >= mySection.offsetTop) {
    myImg.style.transform = "translateX(0)";
  }
});

let skills = document.querySelector("section .skills");
let myProgress = document.querySelectorAll(
  "section .skills .lang .progress div"
);

window.addEventListener("scroll", function () {
  if (this.scrollY >= skills.offsetTop - 300) {
    myProgress.forEach((progress) => {
      progress.style.width = progress.dataset.progress;
    });
  }
});

let myImgPopup = document.querySelectorAll(".gallery .box img");

myImgPopup.forEach((element) => {
  element.addEventListener("click", () => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";

    let myImg = document.createElement("img");
    myImg.className = "popup-img";
    myImg.src = element.src;

    document.body.appendChild(overlay);

    if (element.alt !== null) {
      let alt = document.createElement("h2");
      myAlt = document.createTextNode(element.alt);
      alt.appendChild(myAlt);
      alt.className = "popup-alt";

      overlay.appendChild(alt);
    }

    let closeIcon = document.createElement("i");
    closeIcon.className = "fas fa-times-circle";
    closeIcon.onclick = () => {
      overlay.remove();
    };

    overlay.appendChild(closeIcon);
    overlay.appendChild(myImg);
  });
});

let timeLine = document.querySelector(".time-line");
let myTimeLineBefore = document.querySelector(".time-line .two div");
let textTimeLine1 = document.querySelector(".one .text:nth-child(1)");
let textTimeLine2 = document.querySelector(".one .text:nth-child(2)");
let textTimeLine3 = document.querySelector(".one .text:nth-child(3)");
let textTimeLine4 = document.querySelector(".three .text:nth-child(1)");
let textTimeLine5 = document.querySelector(".three .text:nth-child(2)");

window.addEventListener("scroll", (element) => {
  if (this.scrollY >= timeLine.offsetTop - 200) {
    myTimeLineBefore.style.height = "1324px";
    textTimeLine1.style.left = "0";
    textTimeLine2.style.left = "0";
    textTimeLine3.style.left = "0";
    textTimeLine4.style.right = "0";
    textTimeLine5.style.right = "0";
  }
});

/* End sections */

document.querySelector(".rest").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

/* Start contact */

let myForm = document.querySelector("form");

let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

myForm.onsubmit = function (e) {
  if (
    userName.value === "" ||
    userName.value.length <= 3 ||
    userName.value.length > 30
  ) {
    e.preventDefault();
  }
  if (
    password.value === "" ||
    password.value.length <= 3 ||
    password.value.length > 30
  ) {
    e.preventDefault();
  }
  if (
    email.value === "" ||
    email.value.length <= 10 ||
    email.value.length > 40
  ) {
    e.preventDefault();
  }
};
