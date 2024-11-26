import { useState, useEffect } from 'react';
import Axios from 'axios';
const CatFactPage = () => {
    const [catFact, setCatFact] = useState("")
    const handleClickBtn = () => {
        Axios.get('https://catfact.ninja/fact?max_length=140')
            .then(response => {
                setCatFact(response.data.fact)
            })
    }

    return (
        <>
            <div className='flex justify-center my-5'>
                <div className='bg-green-200 lg:w-1/2  rounded sm:w-5/6 sm:px-3 sm:py-5'>
                    <div className='sm:mx-1  mx-10 my-3'>
                        <h1 className='text-4xl sm:text-2xl'>Do you want to know a fact about cats?</h1>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => handleClickBtn()} className='bg-pink-600 px-5 py-3 rounded'>Tell Me a Fact</button>
                    </div>
                    <div>
                        <h2 className='text-xl my-3 sm:text-base sm:text-center'>{catFact}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatFactPage;