import { AllContainer, HomeContainer, ProductsArea, SubtitleContainer, TextContainer, TitleContainer } from "./styles";
import coffeImage from '../../assets/coffee.svg'
import { CoffeeCard } from "../components/CoffeeCard";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

interface Coffee {
    id: string
    image: string
    name: string
    description: string
    value: string
}

export function Home(){
        const newCoffee: Coffee[] = [
            {
                id: String(new Date().getTime()),
                image: 'expresso.svg',
                name: 'Expresso Tradicional',
                description: 'O tradicional café feito com água quente e grãos moídos',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'ex_americano.svg',
                name: 'Expresso Americano',
                description: 'Expresso diluído, menos intenso que o tradicional',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'ex_cremoso.svg',
                name: 'Expresso Cremoso',
                description: 'Café expresso tradicional com espuma cremosa',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'ex_gelado.png',
                name: 'Expresso Gelado',
                description: 'Bebida preparada com café expresso e cubos de gelo',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'cafe_leite.svg',
                name: 'Café com Leite',
                description: 'Meio a meio de expresso tradicional com leite vaporizado',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'latte.svg',
                name: 'Latte',
                description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'capuccino.svg',
                name: 'Capuccino',
                description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'macchiato.svg',
                name: 'Macchiato',
                description: 'Café expresso misturado com um pouco de leite quente e espuma',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'mocaccino.svg',
                name: 'Mocaccino',
                description: 'Café expresso com calda de chocolate, pouco leite e espuma',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'choc_quente.svg',
                name: 'Chocolate Quente',
                description: 'Bebida feita com chocolate dissolvido no leite quente e café',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'cubano.svg',
                name: 'Cubano',
                description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'havaiano.svg',
                name: 'Havaiano',
                description: 'Bebida adocicada preparada com café e leite de coco',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'arabe.svg',
                name: 'Árabe',
                description: 'Bebida preparada com grãos de café árabe e especiarias',
                value: '9,90'
            },
            {
                id: String(new Date().getTime()),
                image: 'irlandes.svg',
                name: 'Irlandês',
                description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
                value: '9,90'
            },
            ]

    return (
    <AllContainer>
        <HomeContainer>
            <TextContainer>
            <TitleContainer>Encontre o cafe perfeito para qualquer hora do dia</TitleContainer>
            <SubtitleContainer>Com o Coffee Delivery voce recebe seu cafe onde estiver, a qualquer hora</SubtitleContainer>
            </TextContainer>
            <img src={coffeImage} alt="" />
        </HomeContainer>
        <ProductsArea>
            {newCoffee.map((item) => {
                return <CoffeeCard img={item.image}
                            subtitle={item.description}
                            title={item.name}
                            value={item.value}
                            id={item.id}
                            />
            })}
            
            
        </ProductsArea>
    </AllContainer>
    )
}