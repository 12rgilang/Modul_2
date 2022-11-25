// import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//menggunakan class component
// class Home extends React.Component{

//   state = {
//     number: 0
//   }

//   // changeNumber = () => {
//   //   let newNumber = this.state.number // 0
//   //   newNumber++ // 1
//   //   this.setState({number: newNumber}) //number: 1
//   // }

//   // changeNumber1 = () => {
//   //   let newNumber = this.state.number // 1 ---> 0
//   //   newNumber-- // 0 ---> -1
//   //   this.setState({number: newNumber}) // number: 0 ---> number: -1
//   // }

//   changeNumber = (operator) => {
//     if(operator === '+'){
//       this.setState({number: this.state.number+1})
//     }else{
//       this.setState({number: this.state.number-1})
//     }
//   }

// Life cycle method di class Component
//   componentDidMount(){
//     // Sering digunakan untuk melakukan fetch data
//     // Dijalankan ketika proses render pertama kali jalan
//     console.log('CompDidMount Running!')
//   }

//   componentDidUpdate(){
//     // Dijalankan setiap kali terjadi perubahan state
//     console.log('CompDidUpdate Jalan')
//   }

//   componentWillUnmount(){
//     // Dijalankan sebelum component dihapus
//     // Sebelum berpindah page
//     alert('Yakin?')
//   }

//catatan pribadi
//   state = {
//     count: 0
//   }

//   // menggunakan 1 function
//   changeNumber = (operator) => {
//     if(operator == '+'){
//       this.setState({count: this.state.count + 1})
//     }else{
//       this.setState({count: this.state.count - 1})
//     }
//      // this.setState berguna untuk merubah data yang sudah ada dan mengupdatenya dengan value didalam setState
//   }

// menggunakan 2 function untuk merubah data dan menambahkan atau mengurangi
// increment = () => {
//   this.setState({count: this.state.count + 1})
// }

// decrement = () => {
//   this.setState({count: this.state.count - 1})
// }

//   render(){
//     return(
//       <>
//       <h1>
//         Count Number
//       </h1>
//       <button onClick={() => this.changeNumber('-')}>
//         -
//       </button>
//       <h1>
//         {
//           this.state.count
//         }
//       </h1>
//       <button onClick={() => this.changeNumber('+')}> {/* this changeNumber untuk memanggil function diatas */}
//         +
//       </button>
//       </>

//   render(){
//     console.log('Render Jalan 1x')
//     return(
//       <>
//         <h1>
//           This is App
//         </h1>
//         <button onClick={() => this.changeNumber('-')}>
//           -
//         </button>
//         <h1>
//           {
//             this.state.number
//           }
//         </h1>
//         <button onClick={() => this.changeNumber('+')}>
//           +
//         </button>
//         <Link to='/profile'>
//           <h1>
//             Menuju ke Profile
//           </h1>
//         </Link>
//         </>
//         )
//     }
// }

let Home = () => {
  const [number, setNumber] = useState(0); // number untuk menyimpan variable, setNumber untuk merubah data state
  const [variable, setVariable] = useState(1221);

  let calculateNumber = (operator) => {
    if (operator === "+") {
      setNumber(number + 1);
    } else {
      setNumber(number - 1);
    }
  };

  // life cycle method di function component menggunakan useEffect
  // === ComponentDidMount /jalan sekali setelah render
  useEffect(() => {
    console.log("UseEffect Running");
  }, []);

  // === ComponentDidUpdate / jalan sekali setelah render
  useEffect(() => {
    console.log("UseEffect Update Running");
  }, [number]); // didalam hardbracket itu untuk memanggil state apabila ada perubahan data

  // === ComponentWillUnmount // jalan saat perpindahan page
  useEffect(() => {
    return () => {
      console.log("UseEffect WillUnmount");
    }
  }, []);

  const inputUsername = useRef()
  const inputPassword = useRef()

  let input = () => {
      console.log(inputUsername.current.value)
      console.log(inputPassword.current.value)
  }

  // untuk data produk penjualan 
  const [product, setProduct] = useState(
    [
      {vendor: 'adidas', quantity: 100, price: 200000},
      {vendor: 'nike', quantity: 100, price: 250000},
      {vendor: 'puma', quantity: 100, price: 300000},
    ]
  )

  return (
    <>
      <h1>Hitung angka</h1>
      <button onClick={() => calculateNumber("+")}>+</button>
      <h1>{number}</h1>
      <button onClick={() => calculateNumber("-")}>-</button>

      <Link to="/profile">
        <h1>Duarrrr</h1>
      </Link>
    
      <input type="text" placeholder="Input Your Username" ref={inputUsername} /> <br />
      <input type="password" placeholder="Input Your Password" ref={inputPassword} /> <br />
    
        <button onClick={input}>
            Submit
        </button>

      {/* Menggunakan data penjualan adidas, nike */}
      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>Quantitiy</td>
            <td>Vendor</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {
            product.map((value, index) => {
              return(
              <tr>
                <td>{index+1}</td>
                <td>{value.quantity}</td>
                <td>{value.vendor}</td>
                <td>Rp.{value.price.toLocaleString()}</td>
              </tr>
              )
            })
          } 

          {/* cara dibawah ini tidak dinamji */}
          {/* {
            <tr>
              <td>1</td>
              <td>{product[0].quantity}</td>
              <td>{product[0].vendor}</td>
              <td>Rp.{product[0].price.toLocaleString()}</td>
              <td></td>
            </tr>
          } */}
        </tbody>
      </table>
        
    </>
  );
};
export default Home;
