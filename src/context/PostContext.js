'use client'
import React, { createContext, useEffect, useState } from 'react'

export const PostContext = createContext();

import axios from 'axios'
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const PostProvider = ({ children }) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const { data } = await axios.get(url)
            if (data.meals) {
                setMeals(data.meals)
            }
            else {
                setMeals([])
            }

        }
        catch (e) {
            console.log(e.response)
        }
        setLoading(false);
    }

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }


    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])

    useEffect(() => {
        if (!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])




    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;

        meal = meals.find((meal) => meal.idMeal === idMeal);

        setSelectedMeal(meal);
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
      }

    return (
        <PostContext.Provider value={({ meals, loading, setSearchTerm, fetchRandomMeal, showModal ,selectMeal, selectedMeal , closeModal})}>
            <div>
                {children}
            </div>
        </PostContext.Provider>

    )
}

export default PostProvider



