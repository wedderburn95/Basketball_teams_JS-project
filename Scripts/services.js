// Basketball Teams api
const URL = 'https://www.balldontlie.io/api/v1/teams/'
const data = 'https://www.balldontlie.io/api/v1/teams/data'
let teams = []
const form = document.querySelector("#select-team")
const action = document.querySelector("#new-task-description")
const reloadButton = document.querySelector('#clear')

document.addEventListener("DOMContentLoaded", function() {
    BasketballTeamLocation()
    

})

function BasketballTeamLocation() {
    return fetch(URL)
    .then(response => response.json())
    .then( function(response) {
    //   debugger
      teams = response.data
      displayTeams()
    })
  
}

function displayTeams() {
   const display = document.getElementById("display")
    const displayName = teams.map(team=> team.name)
    displayName.forEach(displayName => {
      const list =  document.createElement('li')
      list.innerText= displayName
      display.appendChild(list)
    } )
}

form.addEventListener("submit", showTeams)
reloadButton.addEventListener('click', () => {
    teamName.forEach(input => input.value = '');
});


function showTeams(event) {
    event.preventDefault()
    const teamName = action.value
    console.log(teamName)
teamInfo(teamName)
}
   
 

function teamInfo(teamName) {
    const team = teams.find(function(team) {return team.name === teamName})
    const name = document.getElementById("name")
    const city = document.getElementById("city")
    const conference = document.getElementById("conference")
    const division = document.getElementById("division")
    name.innerText = `Team Name: ${team.name}`
    city.innerText = `Team City: ${team.city}`
    conference.innerText = `Conference: ${team.conference}`
    division.innerText = `Division: ${team.division}`

    
}



// document.addEventListener(URL, () => {
//     const form = document.getElementById("select-team");
//     form.addEventListener("submit", newTask);
//   });

// function postBasketballTeamLocation(body) {
//   return fetch(URL, {
//     method: 'POST',
//     headers: {
      
//     },
//     body: JSON.stringify(body)
//   })
//   .then(res => res.json())
// }