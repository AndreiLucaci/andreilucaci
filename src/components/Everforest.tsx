import { ArrowUpRight } from 'lucide-react'

export function Everforest() {
    return <article className="everforest featured">
        <div className="featured-copy">
            <div className="project-meta"><span>MAINTAINED OPEN SOURCE</span><span className="status">VS Code extension</span></div>
            <h3>Everforest Pro<span className="accent">.</span></h3>
            <p className="tagline">A calmer place to write code.</p>
            <p>My maintained fork of sainnhe’s Everforest theme for VS Code. Warm forest colors, light and dark variants, configurable contrast, and scheduled theme switching.</p>
            <p className="maintenance-note">Continuing the project as its upstream heads toward archival. Built on the original authors’ work, with credit to its roots.</p>
            <div className="actions"><a className="button primary" href="https://marketplace.visualstudio.com/items?itemName=AndreiLucaci.everforest-pro">Get the extension <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href="https://github.com/AndreiLucaci/everforest-vscode">Source & credits <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <p className="download-note">Approaching 10,000 downloads as of October 2026. <a href="https://marketplace.visualstudio.com/items?itemName=AndreiLucaci.everforest-pro">See the current listing.</a></p>
        </div>
        <div className="editor-preview" aria-label="Illustrative code preview using a forest-inspired palette">
            <div className="editor-top"><span aria-hidden="true">● ● ●</span><span>everforest.ts</span></div>
            <pre><code><span className="code-comment">{'// A little care in the everyday tools.'}</span>{'\n\n'}<span className="code-keyword">const</span>{' workspace = {\n'}{'  theme: '}<span className="code-string">{'"Everforest Pro"'}</span>{',\n'}{'  appearance: '}<span className="code-string">{'"warm & quiet"'}</span>{',\n'}{'  madeFor: '}<span className="code-string">{'"the long run"'}</span>{'\n};\n\n'}<span className="code-comment">{'// Light or dark. Make it yours.'}</span></code></pre>
            <div className="editor-palette" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <p>ILLUSTRATIVE PALETTE / REAL EXTENSION</p>
        </div>
    </article>
}
