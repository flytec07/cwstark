import Footer from './Footer';
import Header from './Header';
import LGPD from './LGPD';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <LGPD />
      </main>
      <Footer />
    </>
  )
}