import Image from 'next/image'
import background from '/public/img/background.jpg'
import Styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <>
            <Image src={background} alt='fundo estiloso' layout='fill' objectFit='cover' objectPosition='center'/>
            <section className={Styles.home}  id='home'>
                <h1>Planejar Desenvolver Executar</h1>
                <p>A CW STARK atua em projetos de engenharia e na confecção de peças e montagens de estruturas metálicas.</p>
            </section>
        </>
    )
}