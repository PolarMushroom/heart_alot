import * as TYPES from '../action_type';

const languageRedux = {
    set_global_language() {
        return {
            type: TYPES.CHANGE_LANGUAGE
        }
    },
    set_global_lang(check) {
        // AsyncStorage.setItem("lang", check);
        // check = 'kr'
        console.log(check);

        return {
            type: TYPES.CHANGE_LANG,
            check
        }
    }
};

export default languageRedux;