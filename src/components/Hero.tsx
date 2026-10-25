import { ArrowUpRight } from 'lucide-react'

export function Hero() {
    return (
        <section id="home" className="hero wrap">
            <div className="hero-copy">
                <p className="eyebrow">
                    <span className="dot"></span> SOFTWARE ARCHITECT · ENGINEER
                    · FOUNDER
                </p>
                <h1>
                    Engineering
                    <br />
                    with <em>intent.</em>
                </h1>
                <p className="intro">
                    I’m Andrei Lucaci. I design systems, write the code, and
                    help teams turn ambitious ideas into software they can build
                    on.
                </p>
                <div className="actions">
                    <a
                        className="button primary"
                        href="https://github.com/AndreiLucaci"
                    >
                        Explore my GitHub{' '}
                        <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                    <a className="text-link" href="#experience">
                        The work behind the words{' '}
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
                <p className="location">
                    Software engineering through AEL Engineering
                </p>
            </div>
            <figure className="portrait">
                <img
                    src="/assets/img/andrei-portrait.png"
                    width="1122"
                    height="1402"
                    alt="Andrei Lucaci"
                />
                <figcaption>
                    <span>Architecture is a decision.</span>
                    <span>Make it on purpose.</span>
                </figcaption>
                <span className="portrait-label" aria-hidden="true">
                    ANDREI LUCACI / AEL
                </span>
            </figure>
        </section>
    )
}
