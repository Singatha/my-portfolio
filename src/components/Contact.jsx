import { ReactComponent as PhoneIcon } from '../assets/images/feather-icons/phone.svg';
import { ReactComponent as MailIcon } from '../assets/images/feather-icons/mail.svg';
import { ReactComponent as GithubIcon } from '../assets/images/feather-icons/github.svg';

const Contact = () => {
    return (
        <div id="contacts" className="contacts">
            <h1 className="contacts__header">Contact</h1>
            <div className="contacts__grid">
                <div className="contacts__grid-item">
                    <PhoneIcon />
                    <p className="contacts__text">+2771 234 5678</p>
                </div>
                <div className="contacts__grid-item">
                    <MailIcon />
                    <p className="contacts__text">johndoe@gmail.com</p>
                </div>
                <div className="contacts__grid-item">
                    <GithubIcon />
                    <p className="contacts__text">John Doe</p>
                </div>
            </div>
            <footer className="contacts__footer">
                <p className="contacts__text">Copyright &copy; 2023 John Doe. All rights reserved.</p>
            </footer>
      </div>
    )
}

export default Contact;
