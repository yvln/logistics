# Logistics - Fonctions primitives :

## Installation
```
-npm install
-npm start
```

## Afficher la timeline avec les entrées en stock

get the data with the event 'entered_store'
```
const mainData = (data) => {
  return data
    .filter(el => el.event === 'entered_store');
}
```

## Au clic, afficher les sous-event

bullets are on divs with class 'bullet'
```
const bullets = document.querySelectorAll('.bullet');
```

add an event listener on each of them 
```
bullets.forEach( bullet => {
  bullet.addEventListener('click', getAllEvents);
});
```

each bullet has a data-city attribute corresponding to the city of the step. Return all the events on that city
```
function getAllEvents() {
  let city = this.getAttribute('data-city');
  return data.filter(el => el.location === city);
};
```