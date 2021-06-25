import React from 'react';

export default () => (
    <form className="mt-10 text-center">
        <label htmlFor="contact-id" className="block text-bg-gray-700 text-sm text-font mb-4">Que onda!!, cuéntame que quieres hacer realidad:</label>
        <div className="flex shadow rounded bg-white border p-1">
            <textarea 
            id = "contact-id"
            name = "contact-id"
            className="flex-1 py-0.2 px-3 text-bg-gray-700 focus:outline-none focus:shadow-outline border-red-600"
            ></textarea>
            <button className="btn">Enviar</button>
        </div>
    </form>
);