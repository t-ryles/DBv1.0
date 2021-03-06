// image Photo gallery
let gallery = document.getElementById('gallery');
let popUp = document.getElementById('popUp');
let selectedImage = document.getElementById('selectedImage');

const imageInd = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
	32,
	34,
	35,
	36
];
selectedImage = null;

imageInd.forEach((i) => {
	//creating image
	const image = document.createElement('img');
	image.src = `/images/DragPhotos/image-${i}.jpg`;
	image.classList.add('galleryImg');
	image.classList.add('f');

	//adding on click event to each image
	image.addEventListener('click', () => {
		selectedImage.src = `/images/DragPhotos/image-${i}.jpg`;
	});

	//adding image to gallery
	gallery.appendChild(image);
});
