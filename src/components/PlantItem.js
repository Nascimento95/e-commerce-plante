import "../styles/PlantItem.css"
import CareScale from "./Carescale"

function PlantItem({name, cover, light, water}) {
    const handleClick = (plantName) => {
        
        alert(`votre choix est ${plantName}? Très bon choix 🌱✨`)
    }
    return (
        <li className="lmj-plant-item" >
            <img onClick={()=> handleClick(name)} src={cover} alt={name} className="lmj-plant-item-cover" />
            <div>
                <CareScale type="eau" eau={water} />
                <CareScale type="soleil"  soleil={light} />
            </div>
        </li>
    )
}

export default PlantItem
