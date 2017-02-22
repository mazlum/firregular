export const SEARCH_VERB = 'SEARCH_VERB';
var _ = require('lodash');

const data = JSON.parse(require('../data/verbs.json'));


export function searchVerb(term) {
    var filtered_verbs;
    if(term == ""){
        filtered_verbs = data.verbs;
    }else{
        filtered_verbs = _.filter(data.verbs, function(obj) {
            return obj.infinitive.indexOf(term.toLowerCase()) !== -1;
        });
    }

    return {
        type: SEARCH_VERB,
        payload: filtered_verbs
    };
}