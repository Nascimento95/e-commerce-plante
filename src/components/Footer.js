import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)
    }
    // console.log(watch("prénom"))

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form onClick={handleSubmit(submit)} >
                <label htmlFor="email">Entrez-vôtre e-mail</label>
                <input 
                    type="text" 
                    id='email'
                    // value={inputValue}
                    {...register("email")}
                />
                <input 
                    type="text"  
                    {...register("prénom",{minLength: 6, required:true})}
                    
                />
                {errors.prénom && <span>prénom obligatoire</span>}
                <button type='submit'>valider</button>
            </form>
		</footer>
	)
}

export default Footer