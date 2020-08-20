import React from 'react';
import classes from './LangControls.module.css';

const LangControls = (props) => {
  const handleChange = (ev) => {
    props.selectTargetLang(ev.target.value);
  };
  return (
    <select className={classes.LangControls} onChange={handleChange}>
      <option value=''>--Select target language--</option>
      <option value='es'>Spanish</option>
      <option value='de'>German</option>
      <option value='fr'>French</option>
      <option value='it'>Italian</option>
    </select>
  );
};

export default LangControls;
