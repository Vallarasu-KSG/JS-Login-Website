const Login2=document.querySelector(".Login2")

//forget-password-script
function fg()
{
    const a=prompt("Please enter the email")
    if(a || null)
    {
        alert("Verification code sent to your email")
    }else
    {
        alert("You not enter the email")
    }
}

//submit-password-script
Login2.addEventListener("submit",(e)=>
{
    e.preventDefault()

    const email=Login2.email.value
    const password=Login2.password.value

    const authenticated=authentication(email,password)

    if(authenticated)
    {
        alert("Your login is successful")
        window.location.href = "Calcy.html"
        // if(authenticated)
        // {
        //     window.location.href("script2.html")
        // }
    }else
    {
        alert("Please enter the correct details")
    }
})

function authentication(email,password)
{
    if(email === "Entri Elevate" && password === "admin123")
    {
        return true
    }else
    {
        return false
    }
}