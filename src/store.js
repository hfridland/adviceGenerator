import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";


import * as api from './config'

import { adviceReducer } from "./features/advice/advice-slice";

export const store = configureStore({
    reducer: {
        advice: adviceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false
    })
})