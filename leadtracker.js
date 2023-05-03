// let myleads=`["www.awesome.com"]`
// myleads=JSON.parse(myleads)
// myleads.push("www.awesome.com")
// myleads=JSON.stringify(myleads)
// console.log(JSON.parse(myleads))
//falsy values are false,0,"",null(developer emptiness),
// undefined(javascript's emptiness),NaN
let myleads=[]
let oldleads=[]
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deletebtn=document.getElementById("delete-btn")

let leadsfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
const tabBtn=document.getElementById("tab-btn")
if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    render(myleads)
}
// const tabs=[
//     {url:"https://www/linkedin.com/in/manju-thakur-09b129221"}
// ]

tabBtn.addEventListener("click",function(){
    //console.log(tabs[0].url)
    chrome.tabs.query({active:true,currentWindow: true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)

      
})
})

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    render(myleads)
})
// localStorage.setItem("myleads","www.awesome.com")
// console.log(localStorage.getItem("myleads"))
// localStorage.clear()
//we can't use inputEl=inputEl+1 but we can do myleads=1
inputbtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    // console.log(myleads)
    inputEl.value=""
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    console.log(localStorage.getItem("myleads"))
})  

//for(let i=0;i<myleads.length;i+=1){
    // console.log(myleads[i])
    // ulEl.texttContent+=myleads[i]+" "
    // ulEl.innerHTML+=myleads[i]+" "
    // ulEl.innerHTML+= "<li>"+myleads[i]+"</li>"

    // + reuired
    // we hav another method 
    // const li=document.createElement("li")
    // li.textContent=myleads[i]
    // ulEl.append(li)
    function render(leads){
    let listitems=""
    for(let i=0;i<leads.length;i+=1){
        // listitems+= "<li>"+myleads[i]+"</li>"
        // listitems+= "<li> <a href='#' target='_blank'> "+myleads[i]+"</a> </li>"
        // for smaller line 
        listitems+=`
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a> 
            </li>`
    }
    ulEl.innerHTML=listitems 
}
//outside the function means argumentd.

// const recipient="james"
// const email=`Hey ${recipient} how is it going`
// console.log(email)

// }