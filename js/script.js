const dragBox = document.getElementById("drag-box");
const inputFile = document.getElementById("input-file");
const preview = document.getElementById("preview");

// for any change on input file element
inputFile.addEventListener("change", function(){
	// get correct img url of upload image
	let imgURL = URL.createObjectURL(inputFile.files[0]);
	// display on preview
	preview.style.backgroundImage = `url(${imgURL})`;
	// remove content
	preview.textContent = "";
	// remove broder (not really necessary)
	preview.style.border = 0;

})