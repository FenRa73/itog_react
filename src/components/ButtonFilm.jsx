import '../styles/App.css'
import { useNavigate } from "react-router-dom";

function ButtonFilm() {

    const films = {
        name: 'Фильма',
        numbers: '1232'
    };

    const navigate = useNavigate();

    return (
        <button className="buttonFilm" onClick={() => navigate("/filmography")} >
            <p className='pnum'>{films.numbers}</p>
            <p className='pfilms'>{films.name}</p>
        </button>
    );
}

export default ButtonFilm;