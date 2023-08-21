function loadFriends(){
    fetch("json/group.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
            h+=`<div class="groups">
            <div class="group">
                <img class="profile" src="${c.image}" alt="A photo">
            </div>
            <div class="mobile-screen">
                <div class="name-group">
                    <p>${c.name}</p>
                </div>
                <div class="view-group">
                    <button class="view">View Group</button>
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
