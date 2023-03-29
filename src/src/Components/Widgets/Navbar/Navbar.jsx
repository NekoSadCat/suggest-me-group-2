import s from "./Navbar.module.scss"
import Icon from "./../../../assets/images/IconNavVector.svg"

const Navbar = () => {
    return ( 
    <div> 
    <a href="/">Movies</a>
    <a href="/">TV Shows</a>
    <a href="/">Suggest me</a>    
    <a href="/"><img src={icon} alt="logo" /></a>    
    </div> );
}

export default Navbar;