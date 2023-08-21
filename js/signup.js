function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    if(username===""||email===""||password==="")
    {
        alert("Vui lòng không bỏ trống!!!")
    }else{
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng kí thành công")
    window.location.href="dangnhap.html"
    }
}
