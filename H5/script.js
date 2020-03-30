var pictureHolder;
pics = document.getElementById("pics");
createPicsHolder();
createImages()
function createPicsHolder() {

    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}
function createImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolder.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        manPlaatje = document.createElement("img");
        manPlaatje.src = "man" + (i+1) + ".jpg";
        manPlaatje.id = (i+1);
        manPlaatje.addEventListener("click", function(){
            maakFavoriet(this.id);
            }
        );
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(manPlaatje);
    }
}
function maakFavoriet(id) {
    console.log("logo " + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notsofavoriet.length; i++){
        notsofavoriet[i].style.backgroundImage = "none";
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('arrow.jpg')";
}