'use client'
import { PostContext } from '@/context/PostContext'
import { useContext, useState } from 'react'

const Search = () => {
    const { setSearchTerm , fetchRandomMeal} = useContext(PostContext);
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

    return (
        <header className='search-container p-4 bg-gray-200'>
            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4'>
                <input
                    type='text'
                    onChange={handleChange}
                    value={text}
                    placeholder='Type favorite meal'
                    className='p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 w-full md:w-auto'
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                    Search
                </button>
                <button type="button" onClick={handleRandomMeal} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                    Surprise Me!
                </button>
            </form>
        </header>
    )

}


export default Search