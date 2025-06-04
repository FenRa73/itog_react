import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { createProject, updateProject, deleteProject } from "../api/api";
import logo from "./pics/logo.png"
import ordenL from "./pics/orden_L.png"
import ordenTKZ from "./pics/orden_TKZ.png"
import "../styles/App.css"
import ButtonFilm from "../components/ButtonFilm";
import { Link } from "react-router-dom";
import ButtonMult from "../components/ButtonMult";
import ItemButton from "../components/ItemButton";


const Home = () => {
    const { state, dispatch } = useContext(ProjectContext);
    const [editingProject, setEditingProject] = useState(null);

    const handleCreate = (project) => {
        createProject(project)
            .then(() => window.location.reload())
            .catch(console.error);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
    };

    const handleUpdate = (project) => {
        updateProject(project.id, project)
            .then(() => window.location.reload())
            .catch(console.error);
    };

    const handleDelete = (id) => {
        deleteProject(id)
            .then(() => window.location.reload())
            .catch(console.error);
    };

    if (state.loading) return <p>Загрузка...</p>;
    if (state.error) return <p>Ошибка: {state.error}</p>;

    const films = {
        name: 'Фильма',
        numbers: '1232'
    };

    const mults = {
        name: 'Мультфильма',
        numbers: '893'
    };


    return (
        <div className="App">
            <div className="container">
                <div className="left-section">
                    <img src={logo} alt="Логотип" />
                    <p className="address">
                        Россия,
                        <br />
                        Санкт-Петербург,
                        <br />
                        Каменноостровский проспект, 10
                    </p>
                    <p className="phone">+9(435)67-88-11 lenfilm@lenfilm.ru</p>
                </div>
                <div className="second-section">
                    <h1>ЛЕНФИЛЬМ</h1>
                    <div className="middle-section">
                        <div className="stats">
                            <Link to="/films">
                                {<ItemButton {...films} />}
                            </Link>
                            <Link to="/films">
                                {<ItemButton {...mults} />}
                            </Link>
                        </div>
                        <div className="right-section">
                            <div className="awards">
                                <div className="margin20">
                                    <img src={ordenL} alt="Орден Ленина" />
                                    <p>Орден Ленина</p>
                                </div>
                                <div>
                                    <img src={ordenTKZ} alt="Орден Трудового Красного Знамени" />
                                    <p>Орден Трудового Красного Знамени</p>
                                </div>
                            </div>
                            <div className="production">
                                <h2>Продукция</h2>
                                <p>Игровые,
                                    <br />
                                    документальные,
                                    <br />
                                    анимационные фильмы
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
