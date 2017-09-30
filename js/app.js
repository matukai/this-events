//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var storeDiv = document.querySelectorAll('.name');
// target parent divs ("name") and store them in array called "storeDiv"

function reveal(){
	var shopChildDiv = this.querySelector(".menu");
	if(shopChildDiv.style.display === "none"){
	shopChildDiv.style.display = "block";
	}else{
		shopChildDiv.style.display = "none";
	}
}

for(var i = 0; i < storeDiv.length;  i++){
	storeDiv[i].addEventListener("click",reveal);
}
