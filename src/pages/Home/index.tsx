import { BannerTop } from '../../components/BannerTop'
import { CoffeListContainer, HomeMainContent } from './style'
import { CoffeeCard } from '../../components/CoffeeCard'
import { CoffeeListContext } from '../../contexts/CoffeeList/CoffeeListContext'
import { useContext } from 'react'

export function Home() {
  const coffeeListCon = useContext(CoffeeListContext)
  return (
    <>
      <BannerTop />
      <HomeMainContent>
        <h1>Nossos cafés</h1>
        <CoffeListContainer>
          {coffeeListCon.CoffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                imgPath={coffee.imgPath}
                title={coffee.title}
                tags={coffee.tags}
                description={coffee.description}
                price={coffee.price}
              />
            )
          })}
        </CoffeListContainer>
      </HomeMainContent>
    </>
  )
}
