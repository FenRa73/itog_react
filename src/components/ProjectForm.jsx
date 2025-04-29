import React, { useState } from "react";

const ProjectForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState(
        initialData || {
            title: "",
            description: "",
            image: "",
            link: ""
        }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: "", description: "", image: "", link: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Название проекта"
                className="border p-2 w-full rounded"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Описание проекта"
                className="border p-2 w-full rounded"
                required
            />
            <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Ссылка на изображение"
                className="border p-2 w-full rounded"
                required
            />
            <input
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="Ссылка на проект"
                className="border p-2 w-full rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Сохранить
            </button>
        </form>
    );
};

export default ProjectForm;
