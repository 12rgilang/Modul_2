import { connect } from 'react-redux'
import { DataAPI } from '../redux/actions/dataAction.js'

import { useEffect } from 'react'

function GetData({DataAPI, dataComponent}){

    useEffect(() => {
        DataAPI()
    }, [])

    return(
        <>
        <h1>Get data Crot</h1>

        <h6>
            {dataComponent.message? dataComponent.message : null}
        </h6>
        {
            dataComponent.data.map((value, index) => {
                return (
                    <div key={index}>{value.name}</div>
                )
            })
        }
        
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        dataComponent: state.DataReducer
    }
}


const mapDispatchToProps = {
    DataAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(GetData)