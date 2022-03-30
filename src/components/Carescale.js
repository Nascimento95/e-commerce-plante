import React from 'react'

function CareScale({soleil, eau , type}) {
    const emojis = type === "eau" ? "💧" :  "🌤" 
    const quantityValue = {
        1:"peu",
        2:"modérément",
        3:"beaucoup"
    }
    const numEmojis = {
        1: <p>{emojis}</p>,
        2: <p>{emojis} {emojis} </p>,
        3: <p>{emojis} {emojis} {emojis}</p>
    }
    return (
        <div>
            <h3 onClick={() => { 
                alert(
                    `cette plante requiert ${type === "eau" ? quantityValue[eau] : quantityValue[soleil] } ${type === "eau" ? "d'arrosage" : "de lumière" } `
                )}}>
                {eau &&  numEmojis[eau]}
                {soleil && numEmojis[soleil]} 
            </h3>
        </div>
    )
}

export default CareScale
