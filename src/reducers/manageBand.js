// manageBand is our state manager for Bands.  Basically,
// instead of making changes in component states,
// we're going to be taking care of those state changes here when it
// comes to Bands.

//counter is just for the unique ID for our Delete case.
let counter = 0
export default function manageBand (state = {
  bands: []

  // We can enter manual information into our state like below.
  // bands: [{text: "manual input here"}]
}, action){
    switch(action.type){
        case 'ADD_BAND':
            counter++;
            action.band['id'] = counter;
            return { bands: state.bands.concat(action.band) };
        case 'DELETE_BAND':
            const bands = state.bands.filter( band => band.id !== action.id )
            return { bands }
        default:
            return state
  }
}
