import React from 'react';
import { connect } from "react-redux";
import action from '../../store/action/index'

function Detail(props) {
  const {
    set_global_lang,
    set_global_language,
    lang,
    language
  } = props;

  // console.log(lang);

  const change_language = async () => {
    if (lang === 'kr') {
      await set_global_lang('en');
      await set_global_language();
    } else {
      await set_global_lang('kr');
      await set_global_language();

    }

  }

  return (
    <div>
      <div>I'm Detail 안녕ㄴ</div>
      <div>{language.home.greeting}</div>
      <button onClick={change_language}>change</button>
    </div>
  );
}



export default connect(state => ({ ...state.language }), { ...action.language })(Detail);
