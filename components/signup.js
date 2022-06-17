let signup = ()=>{
    let nameOfUser = "";

    let arr2 = JSON.parse(localStorage.getItem("user")) || [];
    arr2.forEach(({name}) =>{
        nameOfUser = name;
    })
    document.getElementById("sh3").innerHTML = nameOfUser;
}
export default signup;