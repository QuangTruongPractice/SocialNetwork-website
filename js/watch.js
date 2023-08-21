function loadWatchs(){
    fetch("json/watch.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
            h+=`<div class="watch">
            <div class="thongtin">
                <img class="anh" src="${c.image}" alt="avt"/>
                <h4>${c.name}</h4>
            </div>
            <div class="noidung">
                <p>${c.caption}</p>
                <iframe src="${c.iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="tuongtac">
                <div class="like" onclick="tuongtac('likebtn')">
                    <img src="img/likebefore.png" alt="like" class="tuongtacicon" id="likebtn">
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
        
        let e = document.getElementById("watchs");
        if(e!==null){
            e.innerHTML =h; 
        }
    })
}

window.onload = function(){
    loadWatchs();
}
