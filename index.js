const store = require('./app/store.js'); //import store
const { fetchUsers } = require('./features/users/userSlice.js');
const cakeActions = require('./features/cake/cakeSlice.js').cakeActions //import cake actions (named import)
const iceCreamActions = require('./features/icecream/iceCreamSlice.js').iceCreamActions
const userActions = require('./features/users/userSlice.js').userActions

console.log('Initial State', store.getState());

// const unsubscribe = store.subscribe(() => {})
const unsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())});

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))

// unsubscribe()

