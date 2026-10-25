import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
    return (
        <header className="header wrap">
            <a
                className="wordmark"
                href="#home"
                aria-label="Andrei Lucaci home"
            >
                al<span>.</span>
            </a>
            <nav aria-label="Main navigation">
                <a href="#work">Products</a>
                <a href="#experience">Experience</a>
                <a href="#ael">AEL Engineering</a>
                <a href="#community">Beyond work</a>
            </nav>
            <div className="header-actions">
                <ThemeToggle />
                <a className="header-contact" href="#contact">
                    Let’s talk <ArrowUpRight aria-hidden="true" size={16} />
                </a>
            </div>
        </header>
    )
}
