import React from 'react'

function DataViewer(props) {

    const {data} = props;

  return (
    <div className="dataViewer">
        <div className="viewer">
            <h1 className='dataTitle'>{`${data.name.first} ${data.name.last}`}</h1>
            <div>
            <p className='responseP'><b>From:</b> {`${data.city}, ${data.country}`}</p>
            <p className='responseP'><b>Job Title:</b> {`${data.city}, ${data.country}`}</p>
            <p className='responseP'><b>Employer:</b>{`${data.employer}`}</p>
            </div>
            
            <br/>
            <div>
                <p className="dataP">Movies:</p>
                <ol>
                    {data.favoriteMovies.map((movie, index) => (<li key={'movie' + index}>{movie}</li>))}
                </ol>
            </div>
            
        </div>
    </div>
  )
}

export default DataViewer