import { connect } from 'react-redux'

function Navbar({counter}){
    return(
        <>
        
            <h1>
                Global State lesson
            </h1>
            <h2>
                {counter.number}
            </h2>
            <h3>
                {counter.username}
            </h3>
            <h1>
                Navbar
            </h1>
        
        </>
    )
}

const mapStateToProps = (state) => { // untuk merubah state
    return{
        counter: state.counter
    }
}

export default connect(mapStateToProps, null)(Navbar)