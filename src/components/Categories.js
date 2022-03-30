
function Categories({categories, funcRecup}) {

    const addCategorie = (e) =>{
        funcRecup(e.target.value)
    }
    
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
