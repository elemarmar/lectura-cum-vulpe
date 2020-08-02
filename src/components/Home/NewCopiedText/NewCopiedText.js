import React from 'react';
import classes from './NewCopiedText.module.css';

const NewText = (props) => {

    return (
        <form className={classes.NewCopiedText}>
            <label htmlFor="copiedText" className={classes.Instructions}>Paste Your Text </label>
            <textarea id="copiedText" name="copiedText"
                      className={classes.CopiedTextArea}
                      rows="5" cols="33"
                      onChange={props.changed}
                      value={props.textValue}
                      />
            <button 
                type="button" 
                onClick={props.onClickHandler}>
                Upload
            </button> 
        </form>);
}

export default NewText;