export interface Project {
    title: string
    url: string
    description: string
    category: string
}

export const projects: Project[] = [
    {
        title: 'JSONF',
        url: 'https://github.com/AndreiLucaci/json-format',
        description:
            'A small JSON formatting and validation utility. Built for the everyday work of making structured data readable.',
        category: 'DEVELOPER UTILITY',
    },
    {
        title: 'Encoding tools',
        url: 'https://github.com/AndreiLucaci/encoding',
        description:
            'Public JavaScript encoding and decoding tools. Focused utilities you can inspect, use, and build on.',
        category: 'TYPESCRIPT / WEB',
    },
    {
        title: 'Git shortcuts',
        url: 'https://github.com/AndreiLucaci/git-shortcuts',
        description:
            'Git shortcuts and autocomplete for a smoother command-line workflow. Small improvements to the tools we use every day.',
        category: 'SHELL / DEVELOPER EXPERIENCE',
    },
]
