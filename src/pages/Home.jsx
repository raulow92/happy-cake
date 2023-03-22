import Muffin from '../assets/muffin.svg'

const Home = () => {
    return (
        <div className="container-home">
            <h2 className='welcome'>Bienvenido a <span>Happy Cake</span></h2>
            <p className='subtitle'>El lugar de los pasteles felices</p>
            <img src={Muffin} alt="muffin" className="muffin"/>
        </div>
    )
}

export default Home