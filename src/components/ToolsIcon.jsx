import { ReactComponent as HTML5Icon } from '../assets/images/devicons/html5.svg';
import { ReactComponent as CSS3Icon } from '../assets/images/devicons/css3.svg';
import { ReactComponent as JavascriptIcon } from '../assets/images/devicons/javascript.svg';
import { ReactComponent as ReactIcon } from '../assets/images/devicons/react.svg';
import { ReactComponent as PythonIcon } from '../assets/images/devicons/python.svg';
import { ReactComponent as GitIcon } from '../assets/images/devicons/git.svg';
import { ReactComponent as GithubIcon } from '../assets/images/devicons/github.svg';
import { ReactComponent as VSCodeIcon } from '../assets/images/devicons/vscode.svg';

export const ToolsIcon = ({tool}) => {
    switch(tool){
        case 'html5':
            return <HTML5Icon className="project__svg"/>
        case 'css3':
            return <CSS3Icon className="project__svg"/>
        case 'javascript':
            return <JavascriptIcon className="project__svg"/>
        case 'react':
            return <ReactIcon className="project__svg"/>
        case 'python':
            return <PythonIcon className="project__svg"/>
        case 'git':
            return <GitIcon className="project__svg"/>
        case 'github':
            return <GithubIcon className="project__svg"/>
        case 'vscode':
            return <VSCodeIcon className="project__svg"/>
        default:
            return <p>no icon</p>
    }
}
