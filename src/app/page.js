import Favorites from '@/components/Favorites'
import Meals from '@/components/Meals'
import Modals from '@/components/Modals'
import Search from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {/* <Modals /> */}
    </>
  )
}
