import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"

import LogoImg from '../assets/Logo.png'
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <Header>
                <Image src={LogoImg} width={120} height={40} alt="Logo" />
            </Header>
            <Component {...pageProps} />
        </Container>
    )
}