import { ReactComponent as HTML5Icon } from '../assets/images/devicons/html5.svg';
import { ReactComponent as CSS3Icon } from '../assets/images/devicons/css3.svg';
import { ReactComponent as JavascriptIcon } from '../assets/images/devicons/javascript.svg';
import { ReactComponent as ReactIcon } from '../assets/images/devicons/react.svg';
import { ReactComponent as PythonIcon } from '../assets/images/devicons/python.svg';
import { ReactComponent as GitIcon } from '../assets/images/devicons/git.svg';
import { ReactComponent as GithubIcon } from '../assets/images/devicons/github.svg';
import { ReactComponent as VSCodeIcon } from '../assets/images/devicons/vscode.svg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about__header">About</h1>
            <p className="about__text">Lorem ipsum dolor sit amet consectetur.
            Diam nulla quis mauris pellentesque consectetur dictum malesuada sit vel.
            Nulla molestie odio pretium sed dolor.
            Ornare velit massa lacus nec justo nunc gravida id tincidunt.
            Scelerisque feugiat convallis porta semper pellentesque ut.</p>
            <h1 className="about__header">Tools and Technology I use</h1>
            <hr className="about__hrline"/>
            <div className="about__icons">
                <HTML5Icon className="about__icon"/>
                <CSS3Icon className="about__icon"/>
                <JavascriptIcon className="about__icon"/>
                <ReactIcon className="about__icon"/>
                <PythonIcon className="about__icon"/>
                <GitIcon className="about__icon"/>
                <GithubIcon className="about__icon"/>
                <VSCodeIcon className="about__icon"/>
            </div>
        </div>
    )
}

export default About;
