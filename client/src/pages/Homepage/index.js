import {useState } from "react";
import sumService from "../../services/sumService";

import HomeLayout from "../../layouts/HomeLayout";


const Homepage = () => {
    const [inputData, setInputData] = useState({
        firstNumber: NaN,
        secondNumber: NaN,
        loading: false
    })

    const [results, setResults] = useState([])



    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        setInputData({
            ...inputData,
            loading: true
        })
        try{
            const res = await sumService(inputData)
            setInputData({
                firstNumber: NaN,
                secondNumber: NaN,
                loading: false
            })
            setResults(res)
        }catch (e) {
            setInputData({
                firstNumber: NaN,
                secondNumber: NaN,
                loading: false
            })
            alert('Invalid input!')
        }

    }

    return (
        <HomeLayout>
            <div className="my-5 md:w-2/4 lg:w-1/4 mx-5 md:mx-auto border border-gray-300 shadow-lg p-5">
                <h2 className="text-center text-gray-400 text-base py-3">Enter the numbers</h2>
                <div className="px-6">
                    <input value={inputData.firstNumber} onChange={handleChange} type="number" name={'firstNumber'} placeholder={'number 1'} className="mb-3 w-full border-gray-400 focus:outline-none p-2 text-gray-400 border"/>
                    <input value={inputData.secondNumber} onChange={handleChange} type="number" name={'secondNumber'} placeholder={'number 2'} className="mb-3 w-full border-gray-400 focus:outline-none p-2 text-gray-400 border"/>
                    <button disabled={inputData.loading} onClick={handleSubmit} className={`w-full border-red-600 border-2 hover:bg-white hover:text-red-600 transition-all duration-300 py-1 text-center text-white bg-red-600 text-lg focus:outline-none`}>
                        {
                            inputData.loading ? 'Loading...' : 'Sum'
                        }
                    </button>

                    <hr className={'text-red-600 my-16 border border-red-600'}/>

                    <h2 className="text-center text-gray-400 text-base py-3">Results</h2>

                    <input type="number" onClick={() => {}} value={results?.length ? results[0].sum : NaN} placeholder={'1523'} className="mb-3 w-full border-gray-400 focus:outline-none p-2 text-gray-400 border"/>
                    {
                        results.length ? (
                            <>
                                <h2 className="text-center text-xs font-bold text-gray-400 text-base pt-3">Histories</h2>
                                <hr/>
                                {
                                    results.map((result) => (
                                        <p className="text-xs py-1 text-gray-500 border-b grid grid-cols-12">
                                            <span className={'col-span-3'}>
                                                {
                                                    result.firstNumber
                                                }
                                            </span>
                                            <span className={'col-span-1 text-center'}>
                                                 +
                                            </span>

                                            <span className={'col-span-3'}>
                                                {
                                                    result.secondNumber
                                                }
                                            </span>

                                            <span className={'col-span-1 text-center'}>
                                                =
                                            </span>
                                            <span className={'col-span-4'}>
                                                 {
                                                     result.sum
                                                 }
                                            </span>

                                        </p>
                                    ))
                                }

                            </>
                        ) : ''
                    }


                </div>
            </div>
        </HomeLayout>
    );
};

export default Homepage;
