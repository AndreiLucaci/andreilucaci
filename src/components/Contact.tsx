import { ArrowUpRight } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="wrap">
                <p className="eyebrow">05 / START A CONVERSATION</p>
                <h2>
                    What are you
                    <br />
                    <em>building next?</em>
                </h2>
                <div className="contact-bottom">
                    <p>
                        A new product, an architecture question,
                        <br />
                        or a team that needs technical direction.
                        <br />
                        Tell me what you’re working on.
                    </p>
                    <a
                        className="contact-link"
                        href="https://www.linkedin.com/in/lucaciandrei/"
                    >
                        Connect on LinkedIn{' '}
                        <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
