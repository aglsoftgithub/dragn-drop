const dragBox = document.getElementById("drag-box");
const inputFile = document.getElementById("input-file");
const preview = document.getElementById("preview");

// for any change on input file element
inputFile.addEventListener("change", uploadProcess);

// Function used to execute process preview
function uploadProcess(){
	// get correct img url of upload image
	let imgURL = URL.createObjectURL(inputFile.files[0]);
	// display on preview
	preview.style.backgroundImage = `url(${imgURL})`;
	// remove content
	preview.textContent = "";
	// remove broder (not really necessary)
	preview.style.border = 0;

};

// add drag and drop event to dragBox
dragBox.addEventListener("dragover", function(event){
	event.preventDefault();
});
dragBox.addEventListener("drop", function(event){
	event.preventDefault();
	inputFile.files = event.dataTransfer.files;
	uploadProcess();
})