import React from 'react'

function DataViewerNav(props) {

  const {incrementData, decrementData, deleteData, changeEditing, newObject} = props;

  return (
    <div className="dataNav">
    <button onClick={e => decrementData(1)} className='textButton' id='left'>{'< Previous'}</button>
    
    <div className='blueBtnGroup'>  
      <button className='blueBtn' onClick={changeEditing}>Edit</button>
      <button className='blueBtn' onClick={e => {deleteData()}}>Delete</button>
      <button className='blueBtn' onClick={newObject}>New</button>
    </div>

    <button onClick={e => incrementData(1)} className='textButton' id='right'>{'Next >'}</button>

    </div>
  )
}

export default DataViewerNav