import React from 'react';
import './index.css';
const Note = (props) => {
    const deleteItem = () => {
        props.delete(props.id);
    };
    return (
        <>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 divnote">
                <h3 className="p-4">{props.title}</h3>
                <p className="p-4">{props.content} </p>
                <button className="btn float-right round-circle position-absolute" style={{right:"0",bottom:"0"}} onClick={deleteItem} color="default" >
                <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </>
    );
};
export default Note;