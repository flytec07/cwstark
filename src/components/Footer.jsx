import Link from 'next/link'
import { useRouter } from 'next/router'
import Styles from '../styles/Footer.module.css'

export default function Footer() {

    const router = useRouter()

    return (
        <footer className={Styles.footer}>
            <section style={{ display: router.pathname === '/' ? 'block' : 'none' }}>
                <div>
                    Icons made by <a href="https://www.flaticon.com/authors/inipagistudio" title="inipagistudio">inipagistudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
            </section>
            <section className={Styles.common}>
                <p>© Todos os direitos reservados desde 2021.</p>
                <div>
                    <Link href="/politicas">
                        <a>Política de Privacidade</a> 
                    </Link>

                    <Link href="/sitemap">
                        <a>Mapa do Site</a> 
                    </Link>
                </div>
            </section>
        </footer>
    )
}