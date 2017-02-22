import { SEARCH_VERB } from '../actions/index';
const data = JSON.parse(require('../data/verbs.json'));


export default function(state = data.verbs, action){
    switch (action.type) {
        case SEARCH_VERB:
            return action.payload;
    }
    return state;
}