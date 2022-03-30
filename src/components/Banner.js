import "../styles/Banner.css"
import Logo from "../assets/leaf.png"

function Banner() {
    const title = "La maison de la jungle"
    return (
        <div className='lmj-banner'>
            <img src={Logo} alt="La maison jungle" className="lmj-logo" />
            <h1 className="lmj-title">{title}</h1>
        </div>
    )
}

export default Banner
