//import Link from 'next/link'
import Head from 'next/head'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Simulation from '../components/Simulation'
import Contact from '../components/Contact'

export default function Page() {

  return (
    <>
      <Head>
        <title>CWSTARK</title>
        <meta name="description" content="A CWSTARK atua em projetos de engenharia e na confecção de peças e montagens de estruturas metálicas." />
      </Head>

      <main>
        <Home />
        <About />
        <Services />
        <Simulation />
        <Contact />
      </main>
    </>
  );
}


