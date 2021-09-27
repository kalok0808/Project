

async function main() {
    const res = await fetch('/project', { method: 'GET' })
    const projectList = await res.json()
    console.log(projectList)

    const mediaList = document.querySelector('.mediaList');
    console.log(mediaList)
    displayList(projectList)

    function displayList(projectList){
        const mediaList = document.querySelector('.mediaList');
        mediaList.innerHTML = ""
        for (let pj of projectList) {  //project 每一個既object, 每次loop都會refresh 新既值
            // console.log(project.projectName)  
            // console.log(project.description)
            // console.log(project.dueDate)
            // const projectName = project.projectName 
            mediaList.innerHTML += `
            <div class="media">
            <div class="h-status">
            
            </div>
            <div class="media-body">
            <h5 class="mt-0">Project:${pj.name}</h5>
            <p>Description:${pj.description}</p> 
            <p>Due Date:${pj.date}</p>
            </div>
            <div class="assigned-to">
            <i class="fas fa-user-circle"></i>
            <i class="fas fa-user-circle"></i>
            </div>
            </div>
            `
        }

    }


    const addonDescriptionPopup = document.querySelector(".addonDescriptionPopup-wrapper");
    const delBtn = document.querySelectorAll('#Del');
    const addonDescriptionConfirmBtn = document.querySelector('#addonConfirm');
    const addonDescriptionCancelBtn = document.querySelector('#addonCancel');
    const addaddonDescriptionButtons = document.querySelectorAll("#popupConfirm");
   



    for (let addaddonDescriptionButton of addaddonDescriptionButtons) {
        addaddonDescriptionButton.addEventListener('click', (event) => {
            // event.preventDefault();
            addonDescriptionPopup.classList.remove('hide')
        })
    }

    // addonDescriptionConfirmBtn.addEventListener('click',()=>{
    //     const empty = this.empty;
    //     empty.remove();
    //   });
    // }
    // })

    addonDescriptionCancelBtn.addEventListener('click', (event) => {
        // event.preventDefault();
        addonDescriptionPopup.classList.add('hide');
    })
    // addonDescriptionCloseBtn.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     addonDescriptionPopup.classList.add('hide');
    // })




    // })

    document.querySelector('#bt').addEventListener('click', (event) => {
        console.log('main')
        addonDescriptionPopup.classList.remove('hide')
    })

    addonDescriptionConfirmBtn.addEventListener('click',async () => {

        console.log(123)
        const pjName = document.querySelector('#floatingTextarea3').value
        console.log(pjName)
        const dName = document.querySelector('#floatingTextarea4').value
        console.log(dName)
        const dueDates = document.querySelector('#addonDate').value
        console.log(dueDates)
        const pj = {
            name: pjName.trim(),
            description: dName.trim(),
            assignedTo:'',
            date: dueDates,
        }
        console.log(pj)
        projectList.push(pj)
        const res = await fetch('/project',{
            method:'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(pj)
        })

        displayList(projectList)
        // addonDescriptionConfirmBtn.style.display = "none";
        document.querySelector('#addonConfirm').addEventListener('click', (event) => {
            console.log('123')
            addonDescriptionPopup.classList.remove('hide')
        })
        
        document.querySelector('#floatingTextarea3').value = "";
    })



    // const newMedia = document.querySelector('.project-control'+'.description-control'+'.assign-to'+'.due-date')
    // newMedia.innerHTML = media.value;


    // const newAddonUserProject = `<p>'‘Task’' + ${userDescription.value}</p>`

}

main()