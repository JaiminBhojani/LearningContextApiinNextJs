'use client'
import Favorites from '@/components/Favorites'
import Meals from '@/components/Meals'
import Modals from '@/components/Modals'
import Search from '@/components/Search'
import { PostContext } from '@/context/PostContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function Home() {
  const { showModal , favorites} = useContext(PostContext);
  return (
    <>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      { showModal && <Modals />}
    </>
  )
}
