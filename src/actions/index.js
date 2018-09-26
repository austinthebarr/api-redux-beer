import * as types from "./../constants/ActionTypes";

export function fetchBrewery(city){
  return function (dispatch){
    dispatch(cityRecieved(city));
    city = city.replace(' ', '_');
    return fetch('https://api.openbrewerydb.org/breweries?by_city='+ city).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json){
      if(json.length > 0){
        for(let i = 0; i <= json.length-1; i++){
        const name = json[i].name;
        const street = json[i].street;
        const city = json[i].city;
        const state = json[i].state;
        const website = json[i].website_url;
        dispatch(breweryReturned(name, street, city, state, website));
      }
      } else {
        console.log('Something went wrong');
      }
    });
  };
}


export const breweryReturned = (name, street, city, state, website) => ({
  type: types.BREWERY_RETURNED,
  name,
  street,
  city,
  state,
  website
});

export const cityRecieved = (city) => ({
  type: types.CITY_RECIEVED,
  city
});
