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
            return <HTML5Icon />
        case 'css3':
            return <CSS3Icon />
        case 'javascript':
            return <JavascriptIcon />
        case 'react':
            return <ReactIcon />
        case 'python':
            return <PythonIcon />
        case 'git':
            return <GitIcon />
        case 'github':
            return <GithubIcon />
        case 'vscode':
            return <VSCodeIcon />
        default:
            return <p>no icon</p>
    }
}
