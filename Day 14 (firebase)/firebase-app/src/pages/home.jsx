import { Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { useState } from 'react'

const Form = lazy(() => import('../component/form'))

let Home = () => {

    const [isOpenForm, setIsOpenForm] = useState(false)

    let onOpenForm = () => {
        setIsOpenForm(!isOpenForm) //gunakan negasi untuk merubah value satetnya
    }


    return(
        <>
        
        <h1>
            FireBase trial
        </h1>
        <button onClick={onOpenForm}>
            Edit form with state
        </button>
        {
            isOpenForm?
            <Suspense fallback={<h1>Loading.........</h1>}>
                <Form />
            </Suspense>
            :
            null
        }
        <h5>
        <Link to='/profile'>
            pindah kesebelah
        </Link>
        </h5>
        </>
    )
}

export default Home