function loadWatchs(){
    fetch("json/newfeed.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
            h+=`<div class="mypost" id="mypost">
            <div class="thongtin">
                <a href="personal.html" class="link">
                    <img class="anh" src="${c.image}" alt="avt"/>
                    <h4>${c.name}</h4>
                </a>
            </div>
            <div class="noidung">
                <p>${c.caption}</p>
                <img src="${c.mainPost}" alt="anh">
            </div>
            <div class="tuongtac">
                <div class="like" onclick="tuongtac('${c.id}')">
                    <img src="img/likebefore.png" alt="like" class="tuongtacicon" id="${c.id}">
                    Thích
                </div>
                <div class="comments">
                    <img src="img/comment.png" alt="cmt" id="commentbtn" class="tuongtacicon">
                    Bình luận
                </div>
                <div class="share">
                    <img src="img/share.png" alt="share" class="tuongtacicon" id="sharebtn">
                    Chia sẻ
                </div>
            </div>
        </div>`;
        
        let e = document.getElementById("posts");
        if(e!==null){
            e.innerHTML =h; 
        }
    })
}

window.onload = function(){
    loadWatchs();
}
