
document.addEventListener('DOMContentLoaded',function(){
    const heading1=document.getElementById('heading1')
    const classElement=document.getElementsByClassName("class1")
    const tagElement=document.getElementsByTagName("p")
    const nameElement=document.getElementsByName("name")
    const querySelectorSingleOne = document.querySelector("#heading2");
    const querSelectorTakeAll=document.querySelectorAll(".class1")
    const divClass=document.getElementById('divClass')
    heading1.textContent="it is a changing content"
    divClass.innerHTML = "<p>This is a good solution</p>"
    querySelectorSingleOne.style.color="blue"
    const image=document.getElementsByClassName("images")
    image[0].setAttribute("src","image1.png")
    image[0].setAttribute("alt","it is a image")
    image[0].setAttribute("width","100px")
    const newpara=document.createElement("h1")
    newpara.textContent="it is create using the js"
    document.body.appendChild(newpara)
    const createImge=document.createElement('img')
    document.body.appendChild(createImge)
    createImge.setAttribute("src","image1.png")
    createImge.setAttribute("width","100px")
    document.body.insertBefore(createImge,heading1)
    const butCrt=document.createElement('button')
    butCrt.textContent="click me"
    document.body.appendChild(butCrt)
    butCrt.addEventListener("click",function(){
        alert("click on button")
    })

})