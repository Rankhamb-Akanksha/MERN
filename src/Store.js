import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./component/Redux-Reducer/CounterSlice";


const Store = configureStore ({
    reducer: {
        counter: counterReducer,
    }
})
 

export default Store
