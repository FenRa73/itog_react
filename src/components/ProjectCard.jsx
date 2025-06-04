import React from "react";

const ProjectCard = ({ project, onEdit, onDelete }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex justify-between mt-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Watch</a>
                <div>
                    <button onClick={() => onEdit(project)} className="text-yellow-500 mr-2">Редактировать</button>
                    <button onClick={() => onDelete(project.id)} className="text-red-500">Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
