const configureStore = require('@reduxjs/toolkit').configureStore //import configure store
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const cakeReducer = require('../features/cake/cakeSlice') //import cake reducer
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const userReducer = require('../features/users/userSlice')

//invoke the function and assign it to constant store
const store = configureStore({ //accepts an object as arguement
    reducer: { //object where we specify all the reducers
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(logger) //by default the configure store function adds some middleware to the redux store setup automatically, so we append the logger middleware to the list.
    // }
})

module.exports = store // default export store