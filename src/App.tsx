import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Expertise } from './components/Expertise'
import { OpenSource } from './components/OpenSource'
import { Experience } from './components/Experience'
import { Services } from './components/Services'
import { Personal } from './components/Personal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
    return (
        <>
            <a className="skip" href="#main">
                Skip to content
            </a>
            <Header />
            <main id="main">
                <Hero />
                <Expertise />
                <Experience />
                <OpenSource />
                <Services />
                <Personal />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
