import React from 'react';
import { FirstName, LaststName } from '../App';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>{(fname) => {
                return (
                    <LaststName.Consumer>{(lname) => {
                        return (
                            <h1 style={{visibility:"hidden"}}> My name is {fname} {lname} </h1>
                        );
                    }}
                    </LaststName.Consumer>
                );
            }}
            </FirstName.Consumer>
        </>
    );
};
export default CompC;