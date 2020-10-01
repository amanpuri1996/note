import React,{useContext} from 'react';
import CompC from './CompC';
import { FirstName, LaststName } from '../App';

const CompB = () => {
const fname =  useContext(FirstName);
const lname =  useContext(LaststName);
    return (
        <>
      <div>
      <h1 style={{visibility:"hidden"}}>I am {fname} {lname}</h1>  
      </div>  
      
            <CompC />
        </>
    );
};
export default CompB;
export { CompC ,FirstName, LaststName};