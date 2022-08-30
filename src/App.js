import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { addUser } from './redux/actions';

function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer);

  const [name , setName] = useState("");
  const [lastName , setLastName] = useState("");

  const handleChangeName = (event) => {
      setName(event.target.value);
  }


  const handleChangelastName = (event) => {
    setLastName(event.target.value);
}

const handleAdd = () => {
    const user = {
      name,
      lastName,
    }

    dispatch(addUser(user));

    setName("");
    setLastName("");


}


 
  return (
    <div className="App">
      <input type="text" placeholder='name' onChange={handleChangeName} value={name}/>
      <input type="text" placeholder='lastName' onChange={handleChangelastName} value={lastName}/>
      <button onClick={handleAdd}>Ajouter</button>
      <br />
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
            </tr>
          </thead>
         
          <tbody>
          {users.map((user,i) =>{
            return  <tr key={i}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
            </tr>

          })}
          </tbody>
         
          
          

        </table>
    </div>
  );
}

export default App;
