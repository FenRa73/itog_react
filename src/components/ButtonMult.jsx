import '../styles/App.css'
import { useNavigate } from "react-router-dom";

function ButtonMult() {

    const films = {
        name: 'Мультфильма',
        numbers: '893'
    };

    const navigate = useNavigate();

    return (
        <button className="buttonFilm" onClick={() => navigate("/filmography")} >
            <p className='pnum'>{films.numbers}</p>
            <p className='pfilms'>{films.name}</p>
        </button>
    );
}

export default ButtonMult;