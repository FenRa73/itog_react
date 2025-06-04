import React from "react";
import '../styles/App.css'

const FilmCard = ({ project, onEdit, onDelete }) => {
    return (
        <div className="post">
            <div className="description">
                <h1>{project.title}</h1>
                <p className="year">{project.year}</p>
                <p className="description">
                    {project.description}
                </p>
            </div>
            <div className="poster">
                <img src={project.image} alt="Постер" />
            </div>
            <div>
                <button onClick={() => onEdit(project)} className="text-yellow-500 mr-2">Редактировать</button>
                <button onClick={() => onDelete(project.id)} className="text-red-500">Удалить</button>
            </div>
        </div>
    );
};

export default FilmCard;