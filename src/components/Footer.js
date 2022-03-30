import { useForm } from 'react-hook-form'
import '../styles/Footer.css'

function Footer() {
	
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail :
            </div>
            <form onClick={handleSubmit(submit)} >
                <input 
                    placeholder='e-mail'
                    type="email" 
                    {...register("email", {required: true})}
                />
                <button type='submit'>valider</button>
                {errors.email && <span><br/>Email obligatoire</span>}
            </form>
		</footer>
	)
}

export default Footer