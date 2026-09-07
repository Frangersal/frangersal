import githubIcon from '../assets/icons/github.svg';
import urlUpRightIcon from '../assets/icons/up-right-from-square-solid-full.svg';

const ProyectoCard = ({ project, src, darkMode }) => {
    const handlePointerMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
    };

    return (
        <article className={`proyecto-bento-item importancia-${project.importance ?? 3}`} onMouseMove={handlePointerMove}>
            <div className="card shadow-green">
                <div className="card-header">
                    <h3 className="proyecto-titulo">{project.title}</h3>
                </div>
                <div className="proyecto-img-wrap">
                    <img src={src} className="card-img-top" alt={project.title} />
                </div>
                <div className={darkMode ? 'card-body card-body-dark' : 'card-body'}>
                    <p className="card-text">{project.description}</p>
                </div>
                <div className={darkMode ? 'card-body card-body-dark proyecto-links' : 'card-body proyecto-links'}>
                    <div className="button-group">
                        <a href={project.urlDemo} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-proyecto-link">
                            <img src={urlUpRightIcon} alt="" className="icon-proyecto-link" />
                            <span>Demo</span>
                        </a>
                        <a href={project.urlRepo} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-proyecto-link">
                            <img src={githubIcon} alt="" className="icon-proyecto-link" />
                            <span>Repositorio</span>
                        </a>
                    </div>
                </div>
                <div className={darkMode ? 'card-footer card-footer-dark' : 'card-footer'}>
                    {Array.isArray(project.tools) && project.tools.map((tool) => (
                        <span key={tool} className="chip-tecnologia">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ProyectoCard;