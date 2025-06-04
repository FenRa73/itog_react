import '../styles/App.css'
import { useNavigate } from "react-router-dom";

function ItemButton(itemName) {

    const navigate = useNavigate();

    return (
        <button className="buttonFilm" onClick={() => navigate("/filmography")} >
            <p className='pnum'>{itemName.numbers}</p>
            <p className='pfilms'>{itemName.name}</p>
        </button>
    );
}

export default ItemButton;