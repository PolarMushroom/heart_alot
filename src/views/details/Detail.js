import React from 'react';
import { connect } from "react-redux";
import action from '../../store/action/index'

function Detail(props) {
  const {
    set_global_lang,
    set_global_language,
    global_action_loading,
    lang,
    language
  } = props;

  // console.log(lang);

  const change_language = () => {
    global_action_loading()
    // console.log(props);
    setTimeout(() => {
      global_action_loading(false)
    }, 5000)


  }

  return (
    <div>
      <div>I'm Detail 안녕ㄴ</div>
      <div>{language.home.greeting}</div>
      <button onClick={change_language}>change</button>
    </div>
  );
}



export default connect(state => ({ ...state.language }), { ...action.globalLoading, ...action.language, })(Detail);
