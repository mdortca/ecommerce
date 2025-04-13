import ContainerPhoto from '../assets/containerphoto.png'

function Container() {
    return(
        <div>
            <div className="flex flex-col">
                <p>SUMMER 2020</p>
                <p>Part of the Neural Universe</p>
                <p>We know how large objects will act, but things on a small scale.</p>
                <button>Shop Now</button>
                <button>Learn More</button>
            </div>
            <img src={ContainerPhoto} alt="" />
        </div>
    )
}

export default Container