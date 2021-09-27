const popup = document.querySelector(".popup-wrapper");
const confirmBtn = document.querySelector('#popupConfirm');
const cancelBtn = document.querySelector('#popupCancel');
// const closeBtn = document.querySelector('.popup-close');


const addButtons = document.querySelectorAll(".addTask")
for (let addButton of addButtons) {
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.remove('hide')
    })
}
popup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('hide');
})

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('hide');
})
// closeBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     popup.classList.add('hide');
// })

// confirmBtn.addEventListener('click', ()=> {
//     console.log(userDescription.value);
    
//     const newUserDescription = document.createElement('p');
//     newUserDescription.innerText = 'Task' + userDescription.value
    
//     uerDescriptionDiv.append(userDescription);
    