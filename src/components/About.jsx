import { ReactComponent as HTML5Icon } from '../assets/images/icons/html5.svg';
import { ReactComponent as CSS3Icon } from '../assets/images/icons/css3.svg';
import { ReactComponent as JavascriptIcon } from '../assets/images/icons/javascript.svg';
import { ReactComponent as ReactIcon } from '../assets/images/icons/react.svg';
import { ReactComponent as PythonIcon } from '../assets/images/icons/python.svg';
import { ReactComponent as GitIcon } from '../assets/images/icons/git.svg';
import { ReactComponent as GithubIcon } from '../assets/images/icons/github.svg';
import { ReactComponent as VSCodeIcon } from '../assets/images/icons/vscode.svg';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__header">About</h1>
            <p className="about__text">Lorem ipsum dolor sit amet consectetur.
            Diam nulla quis mauris pellentesque consectetur dictum malesuada sit vel.
            Nulla molestie odio pretium sed dolor.
            Ornare velit massa lacus nec justo nunc gravida id tincidunt.
            Scelerisque feugiat convallis porta semper pellentesque ut.</p>
            <h1 className="about__header">Tools and Technology I use</h1>
            <hr className="about__hrline"/>
            <HTML5Icon width="100" height="100"/>
            <CSS3Icon width="100" height="100" />
            <JavascriptIcon width="100" height="100"/>
            <ReactIcon width="100" height="100"/>
            <PythonIcon width="100" height="100"/>
            <GitIcon width="100" height="100" />
            <GithubIcon width="100" height="100"/>
            <VSCodeIcon width="100" height="100"/>          
        </div>
    )
}

export default About;
