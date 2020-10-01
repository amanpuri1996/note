import React, { useState } from 'react';
import './index.css';
const CreateNote = props => {
    const [state, setState] = useState({
        title: "",
        content: ""
    });
    const [expand, setExpand] = useState(false);

    const inputText = e => {
        const { name, value } = e.target;
        setState((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
    };
    const addNewNote = () => {
        state.title === "" ? alert("please type something") : props.noteData(state);
        setState({
            title: "",
            content: ""
        });
    };
    const expandNormal = () => {
        return (expand === true ? setExpand(false) : setExpand(true));
    }

    return (
        <>
            <div className="col-xs-0 col-sm-0 col-md-0  col-lg-4"></div>
            <div className="col-xs-12 col-sm-12 col-md-6  col-lg-5 divleft" onDoubleClick={expandNormal}>
                <div className="Aman" >
                    {expand === true ? <input type="text"
                        className="form-control"
                        name="title"
                        value={state.title}
                        onChange={inputText}
                        placeholder="Type text"
                        autoComplete="off"
                    /> : null}
                    <br />

                    <textarea
                        type="textarea"
                        row="2"
                        cols="69"
                        className="form-control"
                        name="content"
                        value={state.content}
                        onChange={inputText}
                        placeholder="Type here content" />
                    {expand === true ? <button
                    type="button"
                        variant="contained"
                        className="btn btn-success float-right"
                        color="primary"
                        onClick={addNewNote}>
                       <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </button> : null}
                </div>
            </div>
        </>
    );
};
export default CreateNote;