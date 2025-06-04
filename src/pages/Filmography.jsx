import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import FilmCard from "../components/FilmCard";
import FilmForm from "../components/FilmForm";
import Navigate from "../components/Navigate";
import { createProject, updateProject, deleteProject } from "../api/api";
import TopButton from "../components/TopButton";

const Filmography = () => {
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

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Navigate />
            <TopButton />
            <div className="nullblock"></div>
            <h1 className="text-3xl font-bold text-center mb-8">Фильмография</h1>
            <FilmForm
                onSubmit={editingProject ? handleUpdate : handleCreate}
                initialData={editingProject}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {state.projects.map((project) => (
                    <FilmCard
                        key={project.id}
                        project={project}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default Filmography;
