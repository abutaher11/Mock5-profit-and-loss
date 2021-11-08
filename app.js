const cp = document.querySelector("#cp");
const sp = document.querySelector("#sp");
const chkbtn = document.querySelector("#chkbtn");
const outputEl = document.querySelector("#output");

chkbtn.addEventListener("click",handler)

function handler(){
    
    var diff = cp.value - sp.value;
    console.log(diff)
    if(diff>0){
        outputEl.innerText = `You have incurred a loss of ${diff} rupee`;
        outputEl.style.color = "red";
    }
    else if(diff<0){
        outputEl.innerText = `You have incurred a profit of ${-diff} rupee`
        outputEl.style.color = "green";
    }
}
