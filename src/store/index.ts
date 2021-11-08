import {createStore} from "kpdux";

import {auth, AuthState} from "./modules/auth.module";


type State = {
    auth: AuthState;
};

const store = createStore({
    auth
});


export type {State};

export default store;