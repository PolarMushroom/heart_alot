import * as TYPES from '../action_type';
import enLanguage from './en';
import krLanguage from './kr';

export default function languageReducer(
    state = {
        language: enLanguage,
        lang: 'en'
    },
    action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case TYPES.CHANGE_LANGUAGE:
            // eslint-disable-next-line no-lone-blocks
            {
                if (state.lang === 'en') {
                    state.language = enLanguage;
                } else {
                    state.language = krLanguage;
                }
            }
            break;
        case TYPES.CHANGE_LANG:
            // eslint-disable-next-line no-lone-blocks
            {
                state.lang = action.check;
            }
            break;
        default:
            break;
    }
    return state
}
