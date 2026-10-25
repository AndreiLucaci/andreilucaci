import { ArrowUpRight } from 'lucide-react'

const initiatives = [
    { name: 'Scriptum Deus', url: 'https://scriptumdeus.com', label: 'NONPROFIT / BIBLE READING', description: 'A Romanian Bible reading application following a one-year plan through the Old and New Testament.', number: '01' },
    { name: 'PrayPoint', url: 'https://praypoint.com', label: 'NONPROFIT / PRAYER & COMMUNITY', description: 'A prayer platform built to connect people through faith and technology.', number: '02' },
    { name: 'studiu.net', url: 'https://studiu.net', label: 'BIBLE STUDY / HOSTED BY ME', description: 'Recordings from our Bible study group. A place to return to the conversations and study together.', number: '03' },
    { name: 'God Mindset', url: 'https://godmindset.ro', label: 'BIBLE DISCUSSIONS / HOSTED BY ME', description: 'A Christian discussion podcast exploring questions about faith, Scripture, and everyday life.', number: '04' },
]

export function Personal() {
    return (
        <section id="community" className="community section">
            <div className="wrap">
                <div className="section-heading">
                    <div><p className="eyebrow">04 / BEYOND ENGINEERING</p><h2>Curiosity. Creativity.<br /><em>A sense of purpose.</em></h2></div>
                    <p>Outside my professional work, I explore ideas through personal projects, nonprofit initiatives, and podcasts. Faith is part of that story, alongside a love of building useful things and bringing people together.</p>
                </div>
                <div className="community-grid">
                    {initiatives.map(item => <article className="community-project" key={item.url}>
                        <span className="project-number">/ {item.number}</span>
                        <p className="eyebrow">{item.label}</p>
                        <h3><a href={item.url}>{item.name}<ArrowUpRight size={21} aria-hidden="true" /></a></h3>
                        <p>{item.description}</p>
                        <a className="text-link" href={item.url}>Explore {item.name} <ArrowUpRight size={16} aria-hidden="true" /></a>
                    </article>)}
                </div>
            </div>
        </section>
    )
}
