

import React from 'react';
import classes from './LangControls.module.css';

const LangControls = (props) => {

    return (
            <select className={classes.LangControls}>
                <option value="">--Select a language--</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
                <option value="fr">French</option>
                <option value="it">Italian</option>
            </select>);
}

export default LangControls;