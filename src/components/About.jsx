import Image from 'next/image'
import about from '/public/img/about.jpg'
import pontualidade from '/public/svg/pontualidade.svg'
import qualidade from '/public/svg/qualidade.svg'
import desenvolvimento from '/public/svg/desenvolvimento.svg'
import Styles from '../styles/About.module.css'

export default function About() {

    return (
        <>
            <section className={Styles.about} id='about'>
                <header>
                    <h2><span>Sobre</span> Nós</h2>
                </header>

                <div className={Styles.aboutImg}>
                    
                    <Image src={about} alt="pessoas que trabalham na empresa cwstark" layout='responsive' />
                    {/* <iframe src="https://www.youtube.com/embed/xxFqPNPJuU8" title="The 12,021 Human Era Calendar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  width="688"></iframe> */}
                </div>
                
                <div className={Styles.aboutText}>
                    <p>Especializada em fabricação e customização metálicas para residências, empresas e indústrias, com projetos de engenharia e arquitetura modernos e inovadores buscando atender as necessidades e peculiaridades de cada cliente, com qualidade, profissionalismo e entrega dentro do prazo contratado.</p>
                    <p>A empresa está instalada na cidade de Indaiatuba, estado de São Paulo para constribuir com o desenvolvimento e atender as demandas em todo o território nacional.</p>
                    <p>Estruturada para produção em ferro e aço, com projetos que podem ser desenvolvidos dentro e fora da empresa.</p>
                </div>

                <ul className={Styles.aboutQualities}>
                    <li>
                        <Image  src={pontualidade} alt="pontualidade" width={75} height={75} />
                        <h3>Pontualidade</h3>
                        <p>Estamos estruturados para atender os compromissos nos prazos estabelecidos. Afinal pontualidade é prova real de qualidade em tudo que fazemos!</p>
                    </li>
                    <li>
                        <Image  src={qualidade} alt="qualidade" width={75} height={75} />
                        <h3>Qualidade</h3>
                        <p>Alegria da empresa é a satisfação do cliente. Para isso temos a capacidade de atender as diversas normas de engenharia para garantir a qualidade.</p>
                    </li>
                    <li>
                        <Image  src={desenvolvimento} alt="desenvolvimento" width={75} height={75} />
                        <h3>Desenvolvimento</h3>
                        <p>Capacidade de atuar nos diversos projetos de engenharia vencendo desafios e propondo soluções para melhor atender o nosso cliente. </p>
                    </li>
                </ul>
            </section>
        </>
    )
}