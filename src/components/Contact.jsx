import Link from 'next/link'
import Styles from '../styles/Contact.module.css'

export default function About() {

    const registerUser = event => {
        event.preventDefault() 
    }

    return (
        <>
            <section className={Styles.contact} id='contact'>
                <header>
                    <h2>Entre em <span>Contato</span></h2>
                </header>

                <div className={Styles.contactContent}>
                    
                    <form className={Styles.form} onSubmit={registerUser}>
                        <label htmlFor="name">Nome (obrigatório)</label>
                        <input type="text" name="name" id="name" required />

                        <label htmlFor="email">Email (obrigatório)</label>
                        <input type="text" name="email" id="email" required />

                        <label htmlFor="tel">Telefone</label>
                        <input type="text" name="tel" id="tel" />

                        <label htmlFor="message">Mensagen (obrigatório)</label>
                        <textarea name="message" id="message" cols="30" rows="10" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>

                    <div className={Styles.info}>
                        <strong>Horário de atendimento:</strong>
                        <p>De segunda a sexta, das 9h às 18h, aos sábados das 8h às 13h (exceto feriados)</p>

                        <Link href="tel:5513982146689">
                            <a>(13) 98214-6689</a>
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=5513982146689">
                            <a>WhatsApp</a>
                        </Link>
                        
                        {/* <iframe title="Endereço da empresa cwstark soluções em engenharia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.3073066502693!2d-47.22167338519714!3d-23.122439984902588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4c9ba59ab6bf%3A0xa3c4dacc7f15304d!2sR.%20Valdir%20Roberto%20de%20Camargo%2C%2021%20-%20Recreio%20Campestre%20J%C3%B3ia%2C%20Indaiatuba%20-%20SP%2C%2013347-030!5e0!3m2!1spt-BR!2sbr!4v1631572970428!5m2!1spt-BR!2sbr" style={{border: 0}} loading="lazy" allowFullScreen></iframe> */}
                    </div>

                </div>
            </section>
        </>
    )
}