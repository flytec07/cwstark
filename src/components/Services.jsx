import Styles from '../Styles/Services.module.css'
import Image from 'next/image'
import Img1 from '/public/img/img-1.png'
import Img2 from '/public/img/img-2.png'
import Img3 from '/public/img/img-3.png'
import Img4 from '/public/img/img-4.png'
import { useEffect, useState } from 'react'

export default function Services() {

    
    useEffect(() => {

        const serviceItens = document.querySelectorAll('[id^="item"]')

        serviceItens.forEach(item => {
            item.onclick = e => maisDetalhes(e.target.id) 
        })

        function maisDetalhes(id) {
            let serviceItem = document.querySelector('#'+id+' + #serviceContent')
            let height = document.querySelector('#'+id+' + #serviceContent > #wrapper').offsetHeight
            serviceItem.style.maxHeight = height = !serviceItem.offsetHeight ? height+'px' : 0

            document.querySelector('#'+id).classList.toggle('rodar')
        }

    }, []);

    return (
        <>
            <section id='services' className={Styles.services}>
                <header>
                    <h2>Nossos <span>Serviços</span></h2>
                </header>

                <div className={Styles.service}>
                    <div id="item1" className={Styles.serviceItem}>
                        <h3>Mezaninos em vários modelos</h3>
                        <span>+</span>
                    </div>

                    <div className={Styles.serviceContent} id='serviceContent'>
                        <div className={Styles.wrapper} id='wrapper'>
                            <p>ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor porta mauris, et convallis odio dictum quis.</p>
                            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id nisl urna. Sed lacus justo, vulputate quis metus vel, pellentesque imperdiet velit.</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.service}>  
                    <div id="item2" className={Styles.serviceItem}>  
                        <h3>Manutenção em aeroportos</h3>
                        <span>+</span>
                    </div>

                    <div className={Styles.serviceContent} id='serviceContent'>
                        <div className={Styles.wrapper} id='wrapper'>
                            <p>ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor porta mauris, et convallis odio dictum quis.</p>
                            <p>Suspendisse vitae pharetra lorem, nec viverra libero. Fusce quis est ac nisi elementum pulvinar quis nec dui.</p>
                            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id nisl urna. Sed lacus justo, vulputate quis metus vel, pellentesque imperdiet velit.</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.service}>
                    <div id="item3" className={Styles.serviceItem}>
                        <h3>Estruturas metálicas para galpões</h3>
                        <span>+</span>
                    </div>
                    
                    <div className={Styles.serviceContent} id='serviceContent'>
                        <div className={Styles.wrapper} id='wrapper'>
                            <p>ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor porta mauris, et convallis odio dictum quis.</p>   
                            <p>Suspendisse vitae pharetra lorem, nec viverra libero. Fusce quis est ac nisi elementum pulvinar quis nec dui.</p>   
                            <p>Suspendisse potenti. Nunc aliquet, eros vel finibus volutpat, nibh odio dignissim neque, ut efficitur ipsum eros vel leo.</p>   
                            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id nisl urna. Sed lacus justo, vulputate quis metus vel, pellentesque imperdiet velit.</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.service}>
                    <div id="item4" className={Styles.serviceItem}>
                        <h3>Containers em diversos modelos</h3>
                        <span>+</span>
                    </div>
                    <div className={Styles.serviceContent} id='serviceContent'>
                        <div className={Styles.wrapper} id='wrapper'>
                            <p>Suspendisse vitae pharetra lorem, nec viverra libero. Fusce quis est ac nisi elementum pulvinar quis nec dui.</p>
                            <p>Suspendisse potenti. Nunc aliquet, eros vel finibus volutpat, nibh odio dignissim neque, ut efficitur ipsum eros vel leo.</p>      
                            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam id nisl urna. Sed lacus justo, vulputate quis metus vel, pellentesque imperdiet velit.</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.service}>
                    <div id="item5" className={Styles.serviceItem}>
                        <h3>Estante Desmontável de Aço</h3>
                        <span>+</span>
                    </div>
                    
                    <div className={Styles.serviceContent} id='serviceContent'>
                        <div className={Styles.wrapper} id='wrapper'>

                            <p><strong>Produto:</strong> Estante Desmontável de Aço</p>
                            <p><strong>Marca:</strong> CWSTARK</p>
                            <p><strong>Modelo:</strong> EST01</p>

                            <div className={Styles.imgWidthAuto}>
                                <Image src={Img1} alt="Projeto de estante de metal da cwstark"/>
                            </div>
                            
                            <p><strong>Descrição Técnica</strong></p>
                            <p>Estante desmontável de aço com abertura no fundo e laterais</p>

                            <p><strong>Altura total:</strong> 2600 mm</p>
                            <p><strong>Largura:</strong> 900 mm</p>
                            <p><strong>Profundidade:</strong> 430 mm</p>
                            <p><strong>Quantidade de prateleiras:</strong> 6 (seis)</p>
                            <p><strong>Capacidade de carga de cada prateleira:</strong> 150 kg</p>
                            <p><strong>Cor:</strong> cinza obtida com pintura eletrostática após tratamento antiferruginoso.</p>

                            <div>
                                <Image src={Img2} alt="Segundo projeto de estante de metal da cwstark" layout='responsive' />
                            </div>

                            <div>
                                <Image src={Img3} alt="Terceiro projeto de estante de metal da cwstark" layout='responsive' />
                            </div>

                            <div>
                                <Image src={Img4} alt="Quarto projeto de estante de metal da cwstark" layout='responsive' />
                            </div>
                            
                            <p><strong>Características das prateleiras</strong></p>
                            <p><strong>Material:</strong> aço</p>
                            <p>Prateleiras de chapa nº 20 com laterais em chapa nº 16 com reforços de perfil U50x25” obtidos de chapas nº 14 conforme mostrado na figura acima. Os perfis são soldados na face inferior de cada prateleira.</p>
                            <p>As prateleiras são parafusadas nas colunas com a utilização de parafusos sextavados M10. Todos os parafusos, porcas e arruelas são fornecidos.</p>
                            <p><strong>Características das colunas</strong></p>
                            <p><strong>Material:</strong> aço</p>
                            <p>Colunas com furos de secção retangular no sentido vertical com espaçamento de 50 mm (eixo a eixo), travamento de reforço em “X” por meio de perfis de 30 mm x 1,9 mm x 1500 mm, parafuso no cruzamento para montagem. Os parafusos são fornecidos.</p>
                            <p><strong>Características dos pés</strong></p> 
                            <p><strong>Material:</strong> aço</p>
                            <p>Pés construídos com chapas nº 14</p>
                            <p><strong>Observações:</strong></p> 
                            <p>Todos os componentes da estante antes da pintura passam por um tratamento de jateamento de areia para seja retirada toda imperfeição superficial obtendo após a pintura uma superfície lisa.</p>
                            <p>Para cada estante serão utilizadas 6 embalagens primárias e 2 embalagens secundárias. Uma embalagem primaria sera utilizada para embalar as 4 cantoneiras da estante, outra embalagem primaria será para embalar as 6 barras chatas, outra  embalagem primária será para embalar os parafusos, porcas e arruelas e finalmente será utilizada uma embalagem primária a cada duas prateleiras. Uma embalagem secundária será usada para embalar as cantoneiras e as barras chatas e outra embalagem secundaria será utilizada para embalar as 6 prateleiras.</p>
                            <p><strong>Garantia:</strong> 12 meses</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}