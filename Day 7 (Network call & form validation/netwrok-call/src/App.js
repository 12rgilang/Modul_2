import { useState } from 'react';
import axios from 'axios'
import './App.css';
import { useEffect } from 'react';
import LinkApi from './supports/constants/linkApi';

function App() {

  const [users, setUsers]  = useState([]) // menggunakan hard bracket karena data yang akan diterima berupa array of object

  // exercise dari localhost
  const [local, setLocal] = useState([])

  let getUsers1 = async() => {
    try {
      let result1 = await axios.get(`${LinkApi}/users`)
      console.log(result1)
      setLocal(result1.data)
    } catch (error) {
      console.log(error)
    }
  }

  let getUsers = async() => {
    try {
      let result = await axios.get('https://akabab.github.io/starwars-api/api/all.json') // Mengambil data dari API Jsonplaceholder --> kemudian datanya disimpan ke variable
      console.log(result)
      setUsers(result.data) // data disini meerupakan key dari json placeholder
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {  // merupajan komponen DidMount karena menjalankan render 1 kali dan langsung menampilkan dalam page html
    getUsers()
    getUsers1()
  }, [])

  // melakukan perbandingan
if(users.length === 0 && local.length === 0){
  return(
    <div>
      Loading
    </div>
  )
}

  return (
    <>
    <div className="App">
      {
        users.map((value, index) => {
          return(
            //name disini merupakan isi key dari object data yang ada di bagian try
            <div key={index}> 
            <div>
              <img src={value.image} alt="" />
            </div>
            </div>
          )
          })
      }
      <br />
      {
        local.map((value, index) => {
          return(
            <div key={index}>
              username: {value.username} <br /> 
              email: {value.email}
            </div>
          )
        })
      }
      
    </div>
    </>
  );
}

export default App;
