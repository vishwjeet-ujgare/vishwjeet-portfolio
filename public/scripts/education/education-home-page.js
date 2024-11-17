


const institutionListElms = document.getElementsByClassName("institution-img");
const instituteLogoContainer = document.getElementsByClassName("institution-logo-container");
const dateRange = document.getElementsByClassName("date-range");

// console.log(institutionListElms.length);
// console.log(institutionListElms);
// console.log(instituteLogoContainer[0]);
// console.log(dateRange);


for (let i = 0; i < institutionListElms.length; i++) {

    institutionListElms[i].addEventListener("mouseover", () => {
        instituteLogoContainer[i].style.backgroundColor = "#133E87";
        instituteLogoContainer[i].style.transition = "background 0.5s ease-in";
        dateRange[i].style.color = "white";
        dateRange[i].style.transition = "color 0.5s ease-in";
    })

    institutionListElms[i].addEventListener("mouseout", () => {

        instituteLogoContainer[i].style.backgroundColor = "#F4F4F4";
        dateRange[i].style.color = "black";
    })
    
}






