import { PostContext } from '@/context/PostContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const Modals = () => {

    const { selectedMeal, closeModal } = useContext(PostContext)
    const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal

    return (
        <>
            <aside className="modal-overlay flex min-h-screen bg-inherit">
                <div className="container relative flex justify-center max-w-xl py-4 m-auto bg-white shadow-2xl">
                    <span className="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-white rounded shadow-md cursor-pointer hover:bg-gray-100">close</span>
                    <div className="jaimin w-1/2 ml-4 bg-cover" >
                        <Image src={image} height={1000} width={200}/>
                    </div>
                    <div className="flex flex-col justify-between w-1/2 px-4 space-y-16">
                        <div>
                            <h1 className="mb-2 text-2xl font-bold leading-tight">
                                {title}
                            </h1>
                            <p className="text-sm text-gray-700">
                                {text}
                            </p>
                        </div>
                        <div>
                            <form>
                                <button className="block w-full py-3 mt-3 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600" type="submit" onClick={closeModal} >Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Modals
