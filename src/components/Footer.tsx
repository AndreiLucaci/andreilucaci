import { useEffect, useState } from 'react'

export function Footer() {
    const [year, setYear] = useState(2026)
    useEffect(() => setYear(new Date().getFullYear()), [])

    return (
        <footer className="wrap footer">
            <a className="wordmark" href="#home">
                al<span>.</span>
            </a>
            <p>
                © <span>{year}</span> Andrei Lucaci · AEL Engineering
            </p>
            <div>
                <a href="https://github.com/AndreiLucaci">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/lucaciandrei/">
                    LinkedIn ↗
                </a>
                <a href="https://www.linkedin.com/company/ael-engineering">
                    AEL ↗
                </a>
            </div>
        </footer>
    )
}
