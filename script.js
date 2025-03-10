

const visitedList = document.getElementById('visited-list');
const futureList = document.getElementById('future-list');


function addVisitedPlace() {
  const visitedPlaceInput = document.getElementById('visited-place');
  const visitedPlace = visitedPlaceInput.value.trim();

  if (visitedPlace) {
  
    const li = document.createElement('li');
    li.textContent = visitedPlace;


    visitedList.appendChild(li);

    visitedPlaceInput.value = '';
  } else {
    alert("Please enter a place.");
  }
}

function addFuturePlace() {
  const futurePlaceInput = document.getElementById('future-place');
  const futurePlace = futurePlaceInput.value.trim();

  if (futurePlace) {
   
    const li = document.createElement('li');
    li.textContent = futurePlace;

  
    futureList.appendChild(li);

  
    futurePlaceInput.value = '';
  } else {
    alert("Please enter a place.");
  }
}


