import { plantList } from '../datas/plantList';
// import CareScale from './Carescale';
import PlantItem from './PlantItem';
import "../styles/ShoppingList.css"
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({cart, updateCart}) {
    
    const [selectedcategories, setSelectedcategories] = useState("")

    const categories = plantList.reduce(
            (acc,plantList) => 
                acc.includes(plantList.category) ? acc : acc.concat(plantList.category),[] ) 
    categories.unshift("toutes les plantes")
        
    const addToCart = (name, price) => {
        const checkPlantAdd = cart.find((plante) => plante.name === name)
        if(checkPlantAdd) {
            const filterPlantCart = cart.filter((plant) => plant.name !== name)
            console.log("mon filter",filterPlantCart)
            updateCart([...filterPlantCart, {
                name,
                price,
                quantity: checkPlantAdd.quantity + 1
            }])
        } else {
            updateCart([...cart,{
                name:name,
                price: price,
                quantity : 1
            }]) 
        }
    }

    const recupStateChildren = async (valueState) => {
        const categoriesSelected = await valueState
        if(categoriesSelected === "toutes les plantes"){
            setSelectedcategories("")
        }else {
            setSelectedcategories(categoriesSelected)
        }
    }

    return (    
        <div className='container'>
            <div className='container-categories'>
                <Categories 
                    funcRecup={recupStateChildren}
                    categories={categories}
                />
            </div>
            
            <ul className='lmj-plant-list'>
                {plantList.filter(plant => plant.category.includes(selectedcategories)).map(({id, cover, name, water, light, price}, index) =>  
                    <div key={id + name}>
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button 
                            onClick={() => addToCart(name, price)}
                        >Ajouter</button>
                    </div>
                    
                )}
            </ul>
        </div>
    )
}

export default ShoppingList
