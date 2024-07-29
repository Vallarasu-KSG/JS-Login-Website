let cs=document.getElementById('cs')


function Clear()
{
    cs.value=" ";
}
function del()
{
    cs.value=cs.value.slice(0,-1)
}
function display(txt)
{
    cs.value = cs.value+txt;
    console.log(cs.value);
}
function calculation()
{
    cs.value=eval(cs.value);
}

const lgbtn=document.querySelector("#lg")

lgbtn.addEventListener("click",()=>
{
    window.location.replace("index.html")
})