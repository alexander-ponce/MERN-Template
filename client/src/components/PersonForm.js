import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PersonForm= (props) => {
   //keep track of what is being typed via useState hook
   const {people, setPeople} = props;
   const [firstName, setFirstName] = useState(""); 
   const [lastName, setLastName] = useState("");

    const onSubmitHandler = (e) => {
        //prevent default behavior of thje submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => {
                //console log to get used to tracking data
                console.log(res);
                console.log(res.data);
                //we will update the lifted state of our people array
                //to include the current value in state plus the single
                //new object created and returned from our post request.
                setPeople ([...people, res.data]); 
            })
            .catch (err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" onChange = {(e) => setFirstName(e.target.value)} />
                </p>

                <p>
                    <label>Last Name</label><br/>
                    <input type="text" onChange = {(e) => setLastName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>

        </div>
    )
}
export default PersonForm;






//previous code before updating
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// const PersonForm= () => {
//     const [ message, setMessage ] = useState("Loading...")
//     useEffect(()=>{
//         axios.get("http://localhost:8000/api")
//             .then(res=>setMessage(res.data.message))
//             .catch(err=>console.log(err))
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }
// export default PersonForm;

