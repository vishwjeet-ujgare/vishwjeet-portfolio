

function setFormAction(actionURL) {
    document.getElementById('projectManageForm').action = actionURL;
}


const inputTechElmt = document.getElementById('inputTech');
const techItemContainer = document.getElementById("tech-list-container")

const inputDevElmt = document.getElementById('inputDev');
const devListContainer = document.getElementById('dev-list-container');

let techStack = [];
let devStack = [];


document.getElementById('addBtn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default form submission
    // Your code here
    const title = document.getElementById("inputTitle").value;
    const startDate = document.getElementById("dateStartDate").value;
    const endDate = document.getElementById("dateEndDate").value;
    const description = document.getElementById("textareaDesc").value;
    const gitHubLink = document.getElementById("inputGithubLink").value;
    const liveProjectLink = document.getElementById("inputLiveProjectLink").value;


    // Collect all data in an object
    const projectData = {
        title: title,
        startDate: startDate,
        endDate: endDate,
        techStack: techStack,
        devStack: devStack,
        description: description,
        gitHubLink: gitHubLink,
        liveProjectLink: liveProjectLink
    };

    // Send POST request
    fetch('/manage-projects/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            resetForm();

        })
        .catch((error) => {
            console.error('Error:', error);

        });

    // console.log("Title : " + title);
    // console.log("Start Date : " + startDate);
    // console.log("End Date : " + endDate);
    // console.log("Technology Stack : " + techStack.join(','));
    // console.log("Developer Stack : " + devStack.join(','));
    // console.log("Description : " + description);
    // console.log("GitHub Link : " + gitHubLink);
    // console.log("Live Project Link  : " + liveProjectLink);

});


function resetForm() {
    techStack =[];
    devStack = [];
    

    document.getElementById("inputTitle").value = "";
    document.getElementById("dateStartDate").value = "";
    document.getElementById("dateEndDate").value = "";
    document.getElementById("textareaDesc").value = "";
    document.getElementById("inputGithubLink").value = "";
    document.getElementById("inputLiveProjectLink").value = "";
    renderDevelopersList();
    renderTechList();
   

}

//Function to add tech stack from form
document.getElementById('btnAddTech').addEventListener('click', () => {

    //Taking inputTech value and triming it 
    const inputTechText = inputTechElmt.value.trim();


    if (inputTechText != "") {

        const techStackByComma = inputTechText.split(',');

        let refineTechStack = techStackByComma.map((text) => text.trim().toLowerCase()).filter((text) => text != "");
        let dublicateTech = [];
        refineTechStack.forEach(tech => {

            if (!techStack.includes(tech)) {

                techStack.push(tech);
            }
            else {
                dublicateTech.push(tech);
            }
        })

        dublicateMsg(techItemContainer, dublicateTech, "tech")
        renderTechList();
    }

    clearField(inputTechElmt);
    addHoverEffects("tech");

});



//Function for added dev stack from form  
document.getElementById('btnAddDev').addEventListener('click', function () {

    const inputDevText = inputDevElmt.value.trim();

    if (inputDevText != "") {

        const devWithoutCommaUndefinedWithLowerCase = inputDevText.split(',')
            .map(text => text.trim().toLowerCase())
            .filter((text) => text != "");

        let dublicateDev = [];

        devWithoutCommaUndefinedWithLowerCase.forEach(dev => {
            if (!devStack.includes(dev)) {
                devStack.push(dev);
            } else {
                dublicateDev.push(dev);
            }
        });


        dublicateMsg(devListContainer, dublicateDev, "Developers");
        renderDevelopersList();
    }

    clearField(inputDevElmt);
    addHoverEffects("dev");

});


//Comman Method to render a dublicate elment enter msg just adjacent to div
function dublicateMsg(adjOfContainer, dublicate, forArray) {

    if (dublicate.length > 0) {

        const duplicateMsg = document.createElement("p");
        duplicateMsg.textContent = `Duplicates ${forArray} weren't added: ${dublicate.join(', ')}`;
        duplicateMsg.style.color = "red";
        duplicateMsg.style.marginTop = "10px";


        adjOfContainer.insertAdjacentElement("afterend", duplicateMsg);

        setTimeout(() => {
            duplicateMsg.remove();
        }, 3000);
    }
    return parseFloat;
}


//render techList 
function renderTechList() {
    techItemContainer.innerHTML = "";

    const techItemBtnLists = techStack.map((tech, index) => {
        return (returnRederTechItemBtn(index, tech));
    }).join('');

    techItemContainer.innerHTML = techItemBtnLists;

}

//Render dev list
function renderDevelopersList() {
    devListContainer.innerHTML = "";
    const devItemBtnLists = devStack.map((developer, index) => {
        return (returnDevItemButton(index, developer));
    }).join('');

    devListContainer.innerHTML = devItemBtnLists;

}


//To remove tech item added by user 
function removeTechItem(index) {
    techStack.splice(index, 1);

    renderTechList();

    addHoverEffects("tech");
}


//To remove Dev item added by user
function removeDevItem(index) {
    devStack.splice(index, 1);
    renderDevelopersList();
    addHoverEffects("dev");
}



function returnRederTechItemBtn(index, text) {
    return `<button id=${index} type="button" class="btn btn-primary tech-items-btn" onclick="removeTechItem(${index})"  ><i class="bi bi-x"></i> ${text}</button> `;

}

function returnDevItemButton(index, text) {
    return `<button id=${index} type="button" class="btn btn-primary dev-items-btn" onclick="removeDevItem(${index})"  ><i class="bi bi-x"></i> ${text}</button> `;

}

//clear inputs

function clearField(field) {
    field.value = "";
}


//common function for hover effect
function addHoverEffects(classFor) {

    console.log(classFor);

    let buttons = [];

    if (classFor == "tech") {
        buttons = document.querySelectorAll('.tech-items-btn');
    }
    else if (classFor == "dev") {
        buttons = document.querySelectorAll('.dev-items-btn');
    }

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            this.classList.add("btn-danger");
        });

        button.addEventListener('mouseout', function () {
            this.classList.remove("btn-danger");
        });
    });
}


