'use client'
import { PostContext } from '@/context/PostContext'
import Image from 'next/image';
import React, { useContext } from 'react'

const Meals = () => {
    const { meals, loading, selectMeal ,addToFavorites } = useContext(PostContext);
    // console.log(meals);
    if (loading) {
        return <section className="section flex items-center justify-center h-screen">
            <h1 className="text-4xl">Loading...</h1>
        </section>
    }

    if (meals.length < 1) {
        return <section className="section flex items-center justify-center h-screen">
            <h4 className='text-4xl'>No meals matched your search term. Please try again.</h4>
        </section>
    }


    return (
        <section>
            <div className="flex flex-wrap justify-center">
                {meals.map((singleMeal) => {
                    const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
                    return (
                        <article key={idMeal} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 m-4 sm:w-48 md:w-64 lg:w-72 xl:w-96">
                            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" onClick={() => selectMeal(idMeal)} />
                            <footer className="text-center">
                                <h5 className="text-lg font-semibold mb-2">{title}</h5>
                                <button onClick={() => addToFavorites(idMeal)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Click Me
                                </button>
                            </footer>
                        </article>
                    );
                })}
            </div>



        </section>
    )
}

export default Meals
