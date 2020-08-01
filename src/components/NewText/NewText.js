import React from 'react';
import './NewText.css';

const NewText = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form method="post" action="#" id="#">
                        <div className="form-group files">
                            <label>Upload Your File </label>
                             <input type="file" 
                                className="form-control" 
                                name="file"
                                onChange={props.onChangeHandler}></input>
                         </div>
                         <button 
                            type="button" 
                            className="btn btn-success btn-block" 
                            onClick={props.onClickHandler}>
                            Upload
                        </button> 
                    </form>    
                </div>
            </div>
        </div>);
}

export default NewText;