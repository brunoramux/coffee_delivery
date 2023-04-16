import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { AddCartButton, Badge, BadgeArea, BotaoContainer, CoffeeCardContainer, Footer, MainCard, Price, QuantityButton, Subtitle, Title } from './styles'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../context/CoffeeContext'



interface CoffeeProps {
    id: string,
    title: string,
    subtitle: string,
    value: string,
    img: string
}

export function CoffeeCard(props: CoffeeProps) {

    

    const { addToCart } = useContext(CoffeeContext)

    const [quantidade, setQuantidade] = useState(0)

    function menosQuantidade(){
        if(quantidade > 0){
            setQuantidade(quantidade - 1)
        }
    }
    function maisQuantidade() {
        setQuantidade(quantidade + 1)
    }

    const imagem = `http://localhost:5173/src/assets/${props.img}`
    const titulo = props.title
    const subtitulo = props.subtitle
    const valor = props.value

    interface addCoffeeToCart {
        id: string
        image: string
        name: string
        description: string
        value: string
        quantity: number
    }

    function handleAddToCart(){
        const newItem: addCoffeeToCart = {
            id: props.id,
            image: imagem,
            name: titulo,
            description: subtitulo,
            value: valor,
            quantity: quantidade
        }
        addToCart(newItem)
    }

    
    return (
        <CoffeeCardContainer>
            <img src={imagem} alt="" />
            <BadgeArea>
                <Badge>
                    TRADICIONAL
                </Badge>
                <Badge>
                    GELADO
                </Badge>
            </BadgeArea>
            <MainCard>
                <Title>{titulo}</Title>
                <Subtitle>{subtitulo}</Subtitle>
            </MainCard>
            <Footer>
                R$<Price>{valor}</Price>
                <BotaoContainer>
                    <QuantityButton>
                        <Minus onClick={menosQuantidade} size={14} weight='bold' />
                    </QuantityButton>
                    <span>{quantidade}</span>
                    <QuantityButton>
                        <Plus onClick={maisQuantidade} size={14} weight='bold' />
                    </QuantityButton>
                </BotaoContainer>
                <AddCartButton onClick={handleAddToCart}><ShoppingCart size={22} weight='fill' /></AddCartButton>
            </Footer>
        </CoffeeCardContainer>
    )
}