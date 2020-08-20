import React from 'react';
import NewText from './NewText/NewText';
import NewCopiedText from './NewCopiedText/NewCopiedText';
import LangControls from './LangControls/LangControls';

// import classes from './Home.module.css';

const Home = (props) => {
  let textMethod = (
    <NewText
      onChangeHandler={props.onChangeHandler}
      onClickHandler={props.onClickHandler}
    />
  );
  if (!props.isUpload) {
    textMethod = (
      <NewCopiedText
        onClickHandler={props.onClickHandler}
        changed={props.onTextChangeHandler}
        textValue={props.textValue}
      />
    );
  }

  return (
    <div>
      {textMethod}
      <LangControls selectTargetLang={props.selectTargetLang} />
      {/* <button
        type='button'
        className={classes.UploadBtn}
        onClick={props.uploadMethodClick}
      ></button> */}
      {/* <button 
                type="button"
                onClick={props.copyMethodClick}
                className={classes.CopyBtn}>
            </button> */}
    </div>
  );
};

export default Home;
