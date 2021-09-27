const descriptionPopup = document.querySelector(".descriptionPopup-wrapper");
const descriptionConfirmBtn = document.querySelector('#Confirm');
const descriptionCancelBtn = document.querySelector('#Cancel');

const today = new Date();
document.querySelector("#mediadate").innerHTML = `<h1> ${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()} </h1>`


// const mediaDiv = document.querySelector(".media");

for (let addDescriptionButton of addDescriptionButtons) {
    addDescriptionButton.addEventListener('click', (event) => {
        // event.preventDefault();
        descriptionPopup.classList.remove('hide')
    })
}
descriptionPopup.addEventListener('click', (event) => {
    // event.preventDefault();
    // descriptionPopup.classList.add('hide');
})
descriptionCancelBtn.addEventListener('click', (event) => {
    // event.preventDefault();
    descriptionPopup.classList.add('hide');
})
// descriptionCloseBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     descriptionPopup.classList.add('hide');
// })
descriptionPopup.addEventListener('click', (e) => {
    e.stopPropagation();
})
document.querySelector('#bt').addEventListener('click', (event) => {
    console.log('main')
})

descriptionConfirmBtn.addEventListener('click',()=>{
    console.log(media.value);

    const newMedia = document.querySelector('.project-control'+'.description-control'+'.assign-to'+'.due-date')
    newMedia.innerHTML = media.value;

    mediaDiv.append(newMedia);
})



descriptionPopup.addEventListener('click', (event) => {
    // event.preventDefault();
    // descriptionPopup.classList.add('hide');
})

//ben
// const medias = document.querySelector('.media')
// for(const media of medias){
//     item.addEventListener('click',()=>{
//         console.log(123)
//     })
// }



