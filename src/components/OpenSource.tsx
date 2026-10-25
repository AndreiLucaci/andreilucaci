import { Everforest } from './Everforest'
import { projects } from '../content'
import { ProjectCard } from './ProjectCard'
import { ArrowUpRight } from 'lucide-react'

export function OpenSource() {
    return (
        <section id="work" className="section wrap">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">02 / PRODUCTS & OPEN SOURCE</p>
                    <h2>
                        Useful things.
                        <br />
                        Made with care.
                    </h2>
                </div>
                <p>
                    My GitHub is part workshop, part toolbox. Small, opinionated
                    products and practical utilities, with the code there to
                    explore.
                </p>
            </div>
            <article className="featured">
                <div className="featured-copy">
                    <div className="project-meta">
                        <span>FEATURED PROJECT</span>
                        <span className="status">Preparing for release</span>
                    </div>
                    <h3>
                        PureKey<span className="accent">.</span>
                    </h3>
                    <p className="tagline">What you type is what you typed.</p>
                    <p>
                        An opinionated, open-source English keyboard for iOS. No
                        autocorrect, predictions, or automatic sentence
                        capitalization. Just your words, with precise cursor
                        control.
                    </p>
                    <ul className="tags" aria-label="PureKey technologies">
                        <li>SwiftUI</li>
                        <li>UIKit</li>
                        <li>iOS</li>
                        <li>Apache 2.0</li>
                    </ul>
                    <div className="actions">
                        <a
                            className="button primary"
                            href="https://purekey.dev"
                        >
                            Explore PureKey{' '}
                            <ArrowUpRight aria-hidden="true" size={16} />
                        </a>
                        <a
                            className="text-link"
                            href="https://github.com/AndreiLucaci/PureKey"
                        >
                            Read the source{' '}
                            <ArrowUpRight aria-hidden="true" size={16} />
                        </a>
                    </div>
                </div>
                <div className="keyboard-visual">
                    <div className="type-sample">
                        A little less correction.
                        <br />
                        <strong>
                            A little more intention
                            <span aria-hidden="true">|</span>
                        </strong>
                    </div>
                    <img
                        className="keyboard-image keyboard-image-light"
                        src="/assets/img/purekey-keyboard-light.jpg"
                        width="1206"
                        height="684"
                        loading="lazy"
                        alt="PureKey English QWERTY keyboard in its light appearance"
                    />
                    <img
                        className="keyboard-image keyboard-image-dark"
                        src="/assets/img/purekey-keyboard-dark.jpg"
                        width="1206"
                        height="684"
                        loading="lazy"
                        alt="PureKey English QWERTY keyboard in its dark appearance"
                    />
                    <p>YOUR WORDS. YOUR KEYBOARD.</p>
                </div>
            </article>
            <Everforest />
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.url}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
            <a
                className="text-link all-projects"
                href="https://github.com/AndreiLucaci?tab=repositories"
            >
                Browse all repositories{' '}
                <ArrowUpRight aria-hidden="true" size={16} />
            </a>
        </section>
    )
}
