const elemImages = document.querySelector(".home-section-images");

const createImage = (image) => {
    const elemPicture = document.createElement("picture");
    elemPicture.classList.add("picture-demonstration");
    const elemImg = document.createElement("img");
    elemImg.classList.add("img-demonstration");

    elemImg.setAttribute("src", image);
    elemPicture.appendChild(elemImg);

    return elemPicture;
};

const loadImages = (images) => {
    console.log('Images data:', images); // Log the fetched images data
    images.forEach((image) => {
        console.log('Creating image for:', image.image); // Log each image URL being processed
        const imageElement = createImage(image.image);
        elemImages.appendChild(imageElement);
    });

    const imgElements = document.querySelectorAll(".img-demonstration");
    const n_images = imgElements.length;
    console.log('Number of images added:', n_images); // Log the number of images added
};

fetch("../assets/json/images-home.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(loadImages)
    .catch(error => console.error('Error loading images:', error));
