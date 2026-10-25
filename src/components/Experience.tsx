import { ArrowUpRight } from 'lucide-react'

export function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="wrap experience-layout">
                <div className="experience-intro">
                    <p className="eyebrow">01 / SELECTED EXPERIENCE</p>
                    <h2>
                        Architecture.
                        <br />
                        Ownership.
                        <br />
                        <em>Delivery.</em>
                    </h2>
                    <p>
                        I’ve worked across startup products and enterprise
                        platforms, balancing software quality with the realities
                        of getting something useful into people’s hands.
                    </p>
                    <p>
                        My focus is on clear boundaries, autonomous services,
                        observability, and teams that understand the systems
                        they own.
                    </p>
                    <a
                        className="text-link"
                        href="https://www.linkedin.com/in/lucaciandrei/"
                    >
                        Full career on LinkedIn{' '}
                        <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                </div>
                <div className="roles">
                    <article className="role">
                        <span className="role-index">01</span>
                        <div>
                            <div className="role-heading">
                                <h3>ifm · moneo</h3>
                                <span>MAR 2025 TO PRESENT</span>
                            </div>
                            <p className="role-label">
                                INDUSTRIAL SOFTWARE / .NET MICROSERVICES
                            </p>
                            <p>
                                Engineering for IIoT analytics and monitoring,
                                with a focus on distributed services and
                                cloud-ready systems.
                            </p>
                        </div>
                    </article>
                    <article className="role">
                        <span className="role-index">02</span>
                        <div>
                            <div className="role-heading">
                                <h3>Archive360 · Unity</h3>
                                <span>AUG 2024 TO MAR 2025</span>
                            </div>
                            <p className="role-label">
                                SENIOR SOFTWARE ENGINEERING
                            </p>
                            <p>
                                Work on a unified enterprise ingestion and
                                archival platform, bringing data pipelines
                                together for cloud migration and data
                                management.
                            </p>
                        </div>
                    </article>
                    <article className="role">
                        <span className="role-index">03</span>
                        <div>
                            <div className="role-heading">
                                <h3>Fullview</h3>
                                <span>NOV 2021 TO APR 2024</span>
                            </div>
                            <p className="role-label">
                                FOUNDING ENGINEER / TECH LEAD
                            </p>
                            <p>
                                Backend product architecture, development and
                                AWS cloud architecture for a Danish
                                customer-support startup. Working closely with
                                founders to bring the product from early
                                development toward a stable platform.
                            </p>
                        </div>
                    </article>
                    <article className="role">
                        <span className="role-index">04</span>
                        <div>
                            <div className="role-heading">
                                <h3>GoodLeap</h3>
                                <span>AUG 2020 TO MAR 2022</span>
                            </div>
                            <p className="role-label">
                                SOFTWARE ARCHITECT / TECH LEAD / SENIOR ENGINEER
                            </p>
                            <p>
                                Serverless financing solutions using AWS and
                                Node.js / TypeScript, alongside technical
                                leadership of a seven-person team.
                            </p>
                        </div>
                    </article>
                    <details className="earlier">
                        <summary>
                            More career experience{' '}
                            <span aria-hidden="true">+</span>
                        </summary>
                        <div className="career-history">
                            <article>
                                <div>
                                    <h4>Code4Nord</h4>
                                    <span>2019 to 2020</span>
                                </div>
                                <p>
                                    Senior Web Engineer across Node.js, React,
                                    PHP and AngularJS, followed by a contract as
                                    the sole .NET engineer modernizing a Danish
                                    ERP product with WPF and DevExpress.
                                </p>
                            </article>
                            <article>
                                <div>
                                    <h4>NTT DATA Romania</h4>
                                    <span>2018 to 2019</span>
                                </div>
                                <p>
                                    .NET development for a WPF financial tool
                                    handling temporal indices for insurance
                                    contracts at a major German insurer.
                                </p>
                            </article>
                            <article>
                                <div>
                                    <h4>NetMatch</h4>
                                    <span>2014 to 2018</span>
                                </div>
                                <p>
                                    Progressed from .NET intern to .NET and
                                    JavaScript developer. Worked with ASP.NET,
                                    .NET Core, AngularJS, TypeScript and React,
                                    while mentoring interns and high-school
                                    students discovering programming.
                                </p>
                            </article>
                            <article>
                                <div>
                                    <h4>Bettersoft</h4>
                                    <span>2013</span>
                                </div>
                                <p>
                                    Started professionally as a junior PHP web
                                    developer, learning and applying PHP and
                                    Zend Framework in a production environment.
                                </p>
                            </article>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}
