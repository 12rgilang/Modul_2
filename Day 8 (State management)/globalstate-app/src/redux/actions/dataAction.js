import axios from 'axios'

export const DataAPI = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log('Get api masuk')
            // console.log(response)
            // console.log(response.data)
            dispatch({
                type: 'GET_DATA_SUCCESS',
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: 'GET-DATA-ERROR',
                payload: error.message
            })
        }
    }
}