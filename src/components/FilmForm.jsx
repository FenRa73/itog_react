import React, { useState } from "react";

const FilmForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState(
        initialData || {
            title: "",
            year: "",
            description: "",
            image: "",
        }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: "", year: "", description: "", image: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Название фильма"
                className="border p-2 w-full rounded"
                required
            />
            <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Год и жанр"
                className="border p-2 w-full rounded"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Описание фильма"
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
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Сохранить
            </button>
        </form>
    );
};

export default FilmForm;