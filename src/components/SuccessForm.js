import successImage from '../images/success-image.svg';

const SuccessForm = () => {
    return (
        <section className="successForm">
            <div className="container">
                <div className="skills_header">
                    User successfully registered
                </div>
                <img id="success-img" src={successImage} alt="success-img" />
            </div>
        </section>
    )
}

export default SuccessForm;