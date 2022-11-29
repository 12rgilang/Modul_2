import { connect } from 'react-redux'
import { SetIncrement, SetDecrement, SetData } from '../redux/actions/counterAction'
import { useRef } from 'react'

function Signin({counter, SetIncrement, SetDecrement, SetData}){
    
    // contoh untuk menggunakan ref dan on submit
    const username = useRef()
    const password = useRef()
    
    let onSubmit = () => {
        let inputUsername = username.current.value
        let inputPassword = password.current.value 
        SetData(inputUsername, inputPassword)
    }

    return(
        <>

        {/* contoh menggunakan input */}
        <input ref={username} type="text" placeholder='Enter your username' />
        <input ref={password} type="password" placeholder='Enter your password' />
        <button onClick={onSubmit}>
            submit
        </button>
        


        {/* contoh incremetn decrement */}
            {/* <h1>
                Global State lesson
            </h1>
            <button disabled={counter.number === 0? true : false } onClick={() => SetDecrement(counter.number)}>
                Set Decrement
            </button>
            <h1>
                Signin
            </h1>
            <h2>
                {counter.number}
            </h2>
            <button onClick={SetIncrement}>
                Set Increment
            </button> */}
        
        </>
    )
}

const mapStateToProps = (state) => { // untuk merubah state
    return{
        counter: state.counter
    }
}

const mapDispatchToProps = { //untuk memanggil function yang berada di dalam initial state
    SetIncrement,
    SetDecrement,
    SetData
}



export default connect(mapStateToProps, mapDispatchToProps)(Signin)
