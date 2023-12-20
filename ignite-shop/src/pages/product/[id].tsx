import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id corporis fugit quasi ipsum dolore iste veniam sunt itaque ullam, quidem cupiditate excepturi dolorum, saepe quae fugiat natus eaque sapiente!</p>

                <button>
                    Comprar agora!
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}