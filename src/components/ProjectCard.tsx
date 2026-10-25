import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../content'

interface ProjectCardProps {
    project: Project
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <article className="project">
            <span className="project-number">
                / {String(index + 1).padStart(2, '0')}
            </span>
            <h3>
                <a href={project.url}>
                    {project.title}{' '}
                    <ArrowUpRight aria-hidden="true" size={16} />
                </a>
            </h3>
            <p>{project.description}</p>
            <span className="project-kind">{project.category}</span>
        </article>
    )
}
