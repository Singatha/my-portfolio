const Contact = () => {
    return (
        <div className="contacts">
            <h1 className="contacts__header">Contact</h1>
            {/* phone icon */}
            <p className="contacts__text">+2771 234 5678</p>
            {/* email contact */}
            <p className="contacts__text">johndoe@gmail.com</p>
            {/* github icon */}
            <p className="contacts__text">John Doe</p>
            <footer className="contacts__footer">
                <p className="contacts__text">Copyright &copy; 2023 John Doe. All rights reserved.</p>
            </footer>
      </div>
    )
}

export default Contact;
