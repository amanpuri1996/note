import React, { createContext, useState } from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import CompA from './CreateContext/CompA';

const FirstName = createContext();
const LaststName = createContext();

function App() {
  const [addData, setAddData] = useState([]);
  const nData = (state) => {

    setAddData((preData) => {
      return [...preData, state];
    });
    console.log(state);
  };


  const delelteNote = (id) => {
    setAddData((preValue) =>
      preValue.filter((val, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote noteData={nData} />
      {addData.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            delete={delelteNote} />
        );
      })}
      <Footer />

      <FirstName.Provider value="Mr. Aman">
        <LaststName.Provider value="Puri">
          <CompA />
        </LaststName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LaststName };