let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let p = document.querySelector("p");
    p.innerText = "Learn Full Stack Development";
    p.style.color = "green";
    // console.log("hii");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText ="HTML CSS JS Bootstrap Git Github";
    document.querySelector("body").append(ul);
    ul.appendChild(li);
})