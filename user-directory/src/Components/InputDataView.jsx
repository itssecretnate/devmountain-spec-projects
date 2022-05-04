import React, {useState} from 'react'

function InputDataView(props) {

    let isEditing = props.isEditing;

    // States
    const [firstName, setFirstName] = useState(isEditing ? props.objectToEdit.name.first : '');
    const [lastName, setLastName] = useState(isEditing ? props.objectToEdit.name.last : '');
    const [city, setCity] = useState(isEditing ? props.objectToEdit.city : '');
    const [country, setCountry] = useState(isEditing ? props.objectToEdit.country : '');
    const [employer, setEmployer] = useState(isEditing ? props.objectToEdit.employer : '');
    const [title, setTitle] = useState(isEditing ? props.objectToEdit.title : '');
    const [movie1, setMovie1] = useState(isEditing ? props.objectToEdit.favoriteMovies[0] : '');
    const [movie2, setMovie2] = useState(isEditing ? props.objectToEdit.favoriteMovies[1] : '');
    const [movie3, setMovie3] = useState(isEditing ? props.objectToEdit.favoriteMovies[2] : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputData = [...e.target];
        // inputData.forEach(input => console.log(input.value));

        let newData = {
            id: props.lastIndex,
            name: {
                first: firstName, last: lastName
            },
            city: city,
            country: country,
            employer: employer,
            title: title,
            favoriteMovies: [
                movie1,
                movie2,
                movie3
            ]
        }

        console.log(newData);

        isEditing ? props.updateData(newData) : props.addData(newData);
    }

  return (
    <div className="dataViewer">
        <div className="viewer">

        <form onSubmit={handleSubmit}>

            <div className='dataTitle'>
                <label><b>Firstname: </b>
                <input type='text' 
                value={firstName} 
                onChange={e => {setFirstName(e.target.value)}}/>
                </label> 

                <label><b> Lastname: </b>
                <input type='text'
                value={lastName}
                onChange={e => {setLastName(e.target.value)}}/>
                </label>
            </div>

            <div>
                <label className='responseP'>
                    <b>From City: </b>
                    <input type='text' value={city}
                    onChange={e => {setCity(e.target.value)}}/>

                    <b> Country: </b>
                    <input type='text' value={country}
                    onChange={e => {setCountry(e.target.value)}}/>

                    </label><br></br>
                <label className='responseP'><b>Job Title: </b>
                <input type='text' value={title}
                    onChange={e => {setTitle(e.target.value)}}/>
                </label><br></br>

                <label className='responseP'><b>Employer: </b>
                <input type='text' value={employer}
                    onChange={e => {setEmployer(e.target.value)}}/>
                </label><br></br>
            </div>

            <br/>

            <div>
                <p className="dataP">Movies:</p>
                <ol>
                    <label><b>Title 1: </b>
                    <input type='text' value={movie1}
                    onChange={e => {setMovie1(e.target.value)}}/>
                    </label><br/>

                    <label><b>Title 2: </b>
                    <input type='text' value={movie2}
                    onChange={e => {setMovie2(e.target.value)}}/>
                    </label><br/>

                    <label><b>Title 3: </b>
                    <input type='text' value={movie3}
                    onChange={e => {setMovie3(e.target.value)}}/>
                    </label><br/>
                </ol>
            </div>

            <button className='blueBtn'>Submit</button>

        </form>
            
        </div>
    </div>
  )
}

export default InputDataView