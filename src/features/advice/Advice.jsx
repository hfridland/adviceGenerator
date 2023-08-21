import div_desktop from './images/pattern-divider-desktop.svg'
import div_mobile from './images/pattern-divider-mobile.svg'
import icon_dice from './images/icon-dice.svg'
import { useAdvice } from './use-advice';

const Advice = () => {
    const {id, advice, setReload} = useAdvice()

    return (
        <main className="main">
            <div className='advice'>Advice #{id} </div>
            <p className='advice-body'>"{advice}"</p>
            <img src={div_desktop} alt='Divider desktop' className='desktop' />
            <img src={div_mobile} alt='Mobile desktop' className='mobile' />
            <div className='btn-container'>
                <div className='btn'>
                    <img src={icon_dice} alt='Dice' onClick={() => setReload(true)} />
                </div>
            </div>
        </main>
    )
}

export default Advice