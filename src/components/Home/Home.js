import React from 'react';
import NewText from '../NewText/NewText';

const Home = (props) => {

    return (
        <NewText 
            onChangeHandler={props.onChangeHandler}
            onClickHandler={props.onClickHandler}/>
    );
}

export default Home;