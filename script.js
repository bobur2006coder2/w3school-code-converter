let getAllCodes = document.getElementById("getAllCodes");
function helloWorld() {
    // HTML codes convert .
    window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[1].contentDocument.getElementById('getAllCodes').innerHTML = window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("allCodes").innerText;
    
    // Css codes convert .
    window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[1].contentDocument.getElementById("getCssCodes").innerHTML = window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("cssCodes").innerText;
}

// Dark mode
// function darkMode() {
//      if(eval(localStorage.getItem('darkMode'))||document.querySelector("body").getAttribute("bgcolor")){
//          document.querySelector("body").setAttribute("bgcolor","")
//         window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("allCodes").setAttribute('style',"color:black; outline:none;");
//         window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("cssCodes").setAttribute('style',"color:black; display: block; outline: invert; padding: 30px 15px;");
//         window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("parentElAllcodes").setAttribute('style',"color:white; outline:none; padding: 30px 15px; border:1px solid black;");
//         toggleBtn.innerText="Dark 🌚";
//         localStorage.setItem('darkMode',false);
//     }else{
//         document.querySelector("body").setAttribute("bgcolor","black");
//         window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("parentElAllcodes").setAttribute('style',"color:white; outline:none; padding: 30px 15px; border:1px solid white;");
//         window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("allCodes").setAttribute('style',"color:white; outline:none;");
//         window.document.all[7].ownerDocument.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName("frame")[0].contentDocument.getElementById("cssCodes").setAttribute('style',"color:white; display: block; outline: invert; padding: 30px 15px;border:1px solid white;");
//         toggleBtn.innerText="Light 🌛";
//         localStorage.setItem('darkMode',true);
//     }
// }