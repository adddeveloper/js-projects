/*
* image to base 64
*/
const droparea = document.getElementById("droparea-box-1");
const openI = document.getElementById("upload-btn");
const imageoutputtext = document.getElementById("imageoutput-1");
const copy = document.getElementById("copy-1");
copy.addEventListener("click", ()=>{
    if(imageoutputtext.select){
        imageoutputtext.select();
    } else if(imageoutputtext.click){
        imageoutputtext.click();
    } else if(imageoutputtext.focus){
        imageoutputtext.focus();
    } else{
        alert("This device doesnot not allow copy!")
    }
    navigator.clipboard.writeText(imageoutputtext.value);
});
openI.onclick=()=>{
    openI.value="";
}
openI.onchange=()=>{
    var reader = new FileReader();
    var file = openI.files[0];
    reader.onload= ()=>{
        imageoutputtext.value = reader.result;
    }
    reader.readAsDataURL(file);   
};
droparea.addEventListener("dragover", (e)=>{
    // add a :hover class here
    e.preventDefault();
});
droparea.addEventListener("dragleave", ()=>{
    // add a :hover-remove class here
});
droparea.addEventListener("drop", (e)=>{
    var reader = new FileReader();
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    reader = new FileReader();
    reader.onload= ()=>{
        imageoutputtext.value = reader.result;
    }
    reader.readAsDataURL(file);
});
/*
* base 64 to image
*/
const imageinputtext = document.getElementById("inputtext-one");
const imageoutputimage = document.getElementById("imageoutputimage");
const convertimageinputtext = document.getElementById("convertimageinputtext");
const downloadImage = document.getElementById("downloadImage");
convertimageinputtext.addEventListener("click", ()=>{
    imageoutputimage.src = imageinputtext.value;
});
downloadImage.addEventListener("click", ()=>{
    if(imageoutputimage){
        saveAs(imageoutputimage.src, "download.png");
    }
});
/*
* text to base 64
*/
const textareatextinput = document.getElementById("textareatextinput");
const converttextinput =  document.getElementById("converttextinput");
const textareatextoutput = document.getElementById("textareatextoutput");
const copytextoutput = document.getElementById("copytextoutput");
copytextoutput.addEventListener("click", ()=>{
    if(textareatextoutput.select){
        textareatextoutput.select();
    } else if(textareatextoutput.click){
        textareatextoutput.click();
    } else if(textareatextoutput.focus){
        textareatextoutput.focus();
    } else{
        alert("This device doesnot not allow copy!")
    }
    navigator.clipboard.writeText(textareatextoutput.value);
});
converttextinput.addEventListener("click", ()=>{
    var str = textareatextinput.value;
    textareatextoutput.value = 
    btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
});
/*
* base 64 to text
*/
const textareabase64totextinput = document.getElementById("textareabase64totextinput");
const textareabase64totextconvert =  document.getElementById("textareabase64totextconvert");
const textareabase64totextoutput = document.getElementById("textareabase64totextoutput");
const textareabase64totextcopy = document.getElementById("textareabase64totextcopy");
textareabase64totextcopy.addEventListener("click", ()=>{
    if(textareabase64totextoutput.select){
        textareabase64totextoutput.select();
    } else if(textareabase64totextoutput.click){
        textareabase64totextoutput.click();
    } else if(textareabase64totextoutput.focus){
        textareabase64totextoutput.focus();
    } else{
        alert("This device doesnot not allow copy!")
    }
    navigator.clipboard.writeText(textareabase64totextoutput.value);
});
textareabase64totextconvert.addEventListener("click", ()=>{
    var str = textareabase64totextinput.value;
    textareabase64totextoutput.value = decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
});