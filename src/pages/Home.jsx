import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { createProject, updateProject, deleteProject } from "../api/api";

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

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Мои проекты</h1>
            <ProjectForm
                onSubmit={editingProject ? handleUpdate : handleCreate}
                initialData={editingProject}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {state.projects.map((project) => (
                    <ProjectCard
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

export default Home;
