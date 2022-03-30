import {useState} from 'react'

function Categories({categories, funcRecup}) {

    const [selectedCategories, setSelectedCategories] = useState("")
    const addCategorie = (e) =>{
        setSelectedCategories(e.target.value)
        funcRecup(e.target.value)
    }
    console.log(selectedCategories)
    
    return (
        <>
            <select  
                onChange={addCategorie}
                id="categories"
            >
                {categories.map((categorie, index) => 
                    <option
                    key={`${categorie}-${index}`}
                    onClick={()=> addCategorie(categorie)}
                    value={categorie}
                    >{categorie}</option>
                )}
            </select>
            
        </>
    )
}

export default Categories
