import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';

// Component imports
import Navbar from './Components/Navbar'
import DataViewer from './Components/DataViewer'
import DataViewerNav from './Components/DataViewerNav'
import InputDataView from './Components/InputDataView';

// Data import
import data from './data.js'

function App() {

  const [dataItem, setDataItem] = useState(0);
  const [dataArr, setDataArr] = useState(data);

  const [showEditor, setShowEditor] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const incrementData = (amount = 1) => {
    if(dataItem === dataArr.length-1) {
      setDataItem(0);
      return;
    }
    setDataItem(dataItem + amount);
  }

  const decrementData = (amount = 1) => {
    if(dataItem === 0) {
      setDataItem(dataArr.length-1)
      return;
    }
    setDataItem(dataItem - amount);
  }

  const deleteData = () => {

    setDataArr(dataArr.filter((object) => {
      return object !== dataArr[dataItem]
    }));

  }

  const addData = (data) => {
    setDataArr([...dataArr, data])

    setShowEditor(false);
    setIsEditing(false);
  }

  const updateData = (data) => {
    let tempArr = dataArr;
    tempArr[dataItem] = data;

    setDataArr(tempArr);
    setShowEditor(false);
    setIsEditing(false);
  }

  const changeEditing = () => {

    setIsEditing(true);
    setShowEditor(!showEditor);
  }

  const newObject = () => {
    
    setIsEditing(false);
    setShowEditor(!showEditor);
  }


  return (
    <div className="App">
      <Navbar />

      {showEditor ? 
      <InputDataView isEditing={isEditing} objectToEdit={dataArr[dataItem]} addData={addData} updateData={updateData} lastIndex={dataArr.length+1}/> :
      <DataViewer data={dataArr[dataItem]} /> }

      <DataViewerNav incrementData={incrementData} decrementData={decrementData} deleteData={deleteData} changeEditing={changeEditing} newObject={newObject} />
    </div>
  );
}

export default App;
