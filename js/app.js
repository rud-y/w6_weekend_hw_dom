document.addEventListener ('DOMContentLoaded', () => {
    console.log("javascript has loaded");

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
    
   
    const deleteBtn = document.querySelector('#delete-btn');
    deleteBtn.addEventListener('click', handleDeleteClick);

    const deleteAllBtn = document.querySelector('#delete-all-btn');
    deleteAllBtn.addEventListener('click', handleDeleteAllClick);

});

const handleFormSubmit = function(event){
    event.preventDefault();

    let name = event.target.name.value;
    let team = event.target.team.value;
    let goals = event.target.goals.value;
    let assists = event.target.assists.value;

    const newPlayer = document.createElement('li');
    newPlayer.textContent = `${name}, ${team},  ${goals} goals,  ${assists} assists`;
    newPlayer.classList.add('list');

    const listOfPlayers = document.querySelector('#display-result');
    listOfPlayers.appendChild(newPlayer);

    const theForm = document.querySelector('#form');
    theForm.reset(); 

    //  ---CREATE ELEMENTS FOR EACH VALUE SEPARATELY ---
    // const newName = document.createElement('li');
    // newName.textContent = `Name: ${name}`;
    // newName.classList.add('list-items');

    // const newTeam = document.createElement('li');
    // newTeam.textContent = `Team: ${team}`;

    // const newGoals = document.createElement('li');
    // newGoals.textContent = `Goals: ${goals}`;

    // const newAssists = document.createElement('li');
    // newAssists.textContent = `Assists: ${assists}`;

    
    // listOfPlayers.appendChild(newTeam);
    // listOfPlayers.appendChild(newGoals);
    // listOfPlayers.appendChild(newAssists);

};

const handleDeleteClick = function() {
    const listOfPlayers = document.querySelector('#display-result');
    listOfPlayers.removeChild(listOfPlayers.lastChild);

};

const handleDeleteAllClick = function() {
    const listOfPlayers = document.querySelector('#display-result');
    while(listOfPlayers.firstChild) {
        listOfPlayers.removeChild(listOfPlayers.firstChild);
    };

   
};