import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Styles from '../styles/Header.module.css'

export default function Header() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    useEffect(() => { 

        let active = document.querySelector('nav a:first-child').getAttribute('class')

        window.addEventListener('scroll', () => { 
    
            let sections = document.querySelectorAll('main section')
            let navLinks = document.querySelectorAll('nav a')

            sections.forEach(section => {
                if (section.getBoundingClientRect().top < window.innerHeight * .2 && section.getBoundingClientRect().bottom > window.innerHeight*.8 ) {
                    const id = section.getAttribute('id')
                    navLinks.forEach(links => {
                        links.classList.remove(active)
                        document.querySelector('[href*='+id+']').classList.add(active)
                    })
                }
            })
        })

    }, []);

    
    useEffect(() => {

        // Scroll Suave - Smooth Scroll
        const menuItens = document.querySelectorAll('nav a[href^="#"]')

        const scrollToIdOnClick = event => {
            event.preventDefault()
            const to = getScrollTopByHref(event.target) 
            scrollToPosition(to)
        }   

        menuItens.forEach(item => {
            item.addEventListener('click', scrollToIdOnClick)
        })

        const scrollToPosition = to => {
            /* window.scroll({
                top: to,
                behavior: 'smooth',
            }) */

            smoothScrollTo(0, to)
        }

        const getScrollTopByHref = element => {
            const id = element.getAttribute('href')
            return document.querySelector(id).offsetTop
        }

        /**
         * Smooth scroll animation
         * @param {int} endX: destination x coordinate
         * @param {int} endY: destination y coordinate
         * @param {int} duration: animation duration in ms
         */
        function smoothScrollTo(endX, endY, duration) {
            const startX = window.scrollX || window.pageXOffset;
            const startY = window.scrollY || window.pageYOffset;
            const distanceX = endX - startX;
            const distanceY = endY - startY;
            const startTime = new Date().getTime();
        
            duration = typeof duration !== 'undefined' ? duration : 800;
        
            // Easing function
            const easeInOutQuart = (time, from, distance, duration) => {
                if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
                return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
            };
        
            const timer = setInterval(() => {
                const time = new Date().getTime() - startTime;
                const newX = easeInOutQuart(time, startX, distanceX, duration);
                const newY = easeInOutQuart(time, startY, distanceY, duration);
                if (time >= duration) {
                    clearInterval(timer);
                }
                window.scroll(newX, newY);
            }, 1000 / 120); // 60 fps
        };

    }, [])

    const router = useRouter()

    return (
        <header className={`${Styles.Header} ${scrollY > 0 ? Styles.stick : null}`}>
            <section>
                <Link href="/">
                    <a style={{color: router.pathname === '/politicas' ? 'var(--color-3)' : null }}>CWSTARK</a>
                </Link> 
                
                <nav style={{ display: router.pathname === '/' ? 'flex' : 'none' }}>
                    <a href="#home" className={Styles.active}>Início</a>
                    <a href="#about">Sobre</a>   
                    <a href="#services">Serviços</a>
                    <a href="#simulation">Simulação</a>
                    <a href="#contact">Contato</a>
                </nav> 
            </section>
        </header>
    )
}