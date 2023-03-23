import logoImage from "../../../assets/img/logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <a href="/">
                <img src={logoImage} alt="Logo" />
            </a>
        </div>
    );
};

export default Logo;
