function toggleTaikhoan(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === "none") ? "block" : "none";
  }

function tuongtac(id){
  var thaydoi = document.getElementById(id);
  if(thaydoi.src.endsWith('img/likebefore.png')){
    thaydoi.src = 'img/likeafter.png';
  }
  else{
    thaydoi.src = 'img/likebefore.png';
  }
}





