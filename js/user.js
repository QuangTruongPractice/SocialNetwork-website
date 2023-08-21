function loadFriends(){
    fetch("json/user.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
            h+=`<div class="friends">
            <div class="friend">
                <img class="profile" src="${c.image}" alt="A photo">
            </div>
            <div class="mobile-screen">
                <div class="name-friend">
                    <p>${c.name}</p>
                </div>
                <div class="mutual-friends">
                    <div class="friend-img">
                        <img src="${c.friendImage}" alt="A photo">
                    </div>
                    <div class="number-of-friends">
                        <p>${c.numberFriend} mutual friends</p>
                    </div>
                </div>
                <div class="add-friend">
                    <button class="add">Add Friend</button>
                </div>
            </div>
       </div>`;
        
        let e = document.getElementById("wrapper");
        if(e!==null){
            e.innerHTML =h; 
        }
    })
}

window.onload = function(){
    loadFriends();
}
