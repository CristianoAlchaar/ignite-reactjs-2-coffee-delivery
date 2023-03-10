import { createContext } from 'react'
import imgExpresso from './../../assets/Expresso.svg'
import imgAmericano from './../../assets/Americano.svg'
import imgExpressoCremoso from './../../assets/ExpressoCremoso.svg'
import imgCafeGelado from './../../assets/CafeGelado.svg'
import imgCafecomLeite from './../../assets/CafeComLeite.svg'
import imgLatte from './../../assets/Latte.svg'
import imgCapuccino from './../../assets/Capuccino.svg'
import imgMacchiato from './../../assets/Macchiato.svg'
import imgMocaccino from './../../assets/Mochaccino.svg'
import imgChocolateQuente from './../../assets/ChocolateQuente.svg'
import imgCubano from './../../assets/Cubano.svg'
import imgHavaiano from './../../assets/Havaiano.svg'
import imgIrlandes from './../../assets/Irlandes.svg'
import imgArabe from './../../assets/Arabe.svg'

const coffeeTags = {
  traditional: 'tradicional',
  cold: 'gelado',
  milky: 'com leite',
  especial: 'especial',
  alcaholic: 'alcóolico',
} as const

export interface coffeeItem {
  id: number
  imgPath: string
  title: string
  tags: string[]
  description: string
  price: number
}

const CoffeeList: coffeeItem[] = [
  {
    id: 1,
    imgPath: imgExpresso,
    title: 'Expresso Tradicional',
    tags: [coffeeTags.traditional],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    imgPath: imgAmericano,
    title: 'Expresso Americano',
    tags: [coffeeTags.traditional],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    imgPath: imgExpressoCremoso,
    title: 'Expresso Cremoso',
    tags: [coffeeTags.traditional],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    imgPath: imgCafeGelado,
    title: 'Expresso Gelado',
    tags: [coffeeTags.traditional, coffeeTags.cold],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    imgPath: imgCafecomLeite,
    title: 'Café com Leite',
    tags: [coffeeTags.traditional, coffeeTags.milky],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    imgPath: imgLatte,
    title: 'Latte',
    tags: [coffeeTags.traditional, coffeeTags.milky],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    imgPath: imgCapuccino,
    title: 'Capuccino',
    tags: [coffeeTags.traditional, coffeeTags.milky],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imgPath: imgMacchiato,
    title: 'Macchiato',
    tags: [coffeeTags.traditional, coffeeTags.milky],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imgPath: imgMocaccino,
    title: 'Mocaccino',
    tags: [coffeeTags.traditional, coffeeTags.milky],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    imgPath: imgChocolateQuente,
    title: 'Chocolate Quente',
    tags: [coffeeTags.especial, coffeeTags.milky],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    imgPath: imgCubano,
    title: 'Cubano',
    tags: [coffeeTags.especial, coffeeTags.alcaholic, coffeeTags.milky],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 12,
    imgPath: imgHavaiano,
    title: 'Havaiano',
    tags: [coffeeTags.especial],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    imgPath: imgArabe,
    title: 'Árabe',
    tags: [coffeeTags.especial],
    description: 'Bebida preparada com grãos de café arabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    imgPath: imgIrlandes,
    title: 'Irlandês',
    tags: [coffeeTags.especial, coffeeTags.alcaholic],
    description: 'Bebida a base de café, uísque, irlandês, açucar e chantilly',
    price: 9.9,
  },
]

export const CoffeeListContext = createContext({
  CoffeeList,
})
