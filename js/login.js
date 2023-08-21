function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(username===""||password==="")
    {
        alert("Vui lòng không bỏ trống!!!")
    }else if(user ==null){
        alert("Vui lòng nhập lại")
    } else if(username == data.username && password == data.password){
        alert("Đăng nhập thành công")
        window.location.href="fb.html"
    }else{
        alert("Đăng nhập thất bại")
    }
}
