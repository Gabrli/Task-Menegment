const InputWork = document.querySelector("#work-sectinon input")

const InputHome = document.querySelector("#home-sectinon input")

const InputHobby = document.querySelector("#hobby-sectinon input")

// list element

const WorkList = document.querySelector("#work-sectinon ul")

const HomeList = document.querySelector("#home-sectinon ul")

const HobbyList = document.querySelector("#hobby-sectinon ul")


//button element

const WorkBtn = document.querySelector("#work-sectinon button")

const HomeBtn = document.querySelector("#home-sectinon button")

const HobbyBtn = document.querySelector("#hobby-sectinon button")

//function

const AddTaskWork = () => {
    const workItem = document.createElement("li")
    const Btnwork = document.createElement("button")
    Btnwork.innerHTML = "X"
    Btnwork.classList.add("text-primary")

    workItem.classList.add("list-group-item")
    workItem.innerHTML = InputWork.value

    workItem.appendChild(Btnwork)
    WorkList.appendChild(workItem)

    Btnwork.addEventListener('click', () => {WorkList.removeChild(workItem)})
}

const AddTaskHome = () => {
    const Btnhome = document.createElement("button")
    Btnhome.innerHTML = "X"
    Btnhome.classList.add("text-primary")

    const homeitem = document.createElement("li")
    homeitem.classList.add("list-group-item")
    homeitem.innerHTML = InputHome.value

    homeitem.appendChild(Btnhome)
    HomeList.appendChild(homeitem)

    Btnhome.addEventListener('click', () => {HomeList.removeChild(homeitem)})

}

const AddTaskHobby = () => {
    const Btnhobby = document.createElement("button")
    Btnhobby.innerHTML = "X"
    Btnhobby.classList.add("text-primary")


    const hobbyitem = document.createElement("li")
    hobbyitem.classList.add("list-group-item")
    hobbyitem.innerHTML = InputHobby.value

    hobbyitem.appendChild(Btnhobby)
    HobbyList.appendChild(hobbyitem)

    Btnhobby.addEventListener('click', () => {HobbyList.removeChild(hobbyitem)})
}


//event 
WorkBtn.addEventListener('click', AddTaskWork)
HomeBtn.addEventListener('click', AddTaskHome)
HobbyBtn.addEventListener('click', AddTaskHobby)


//window function reset values 

window.addEventListener('load', () => {
    InputWork.value = ''
    InputHome.value = ''
    InputHobby.value = ''
})