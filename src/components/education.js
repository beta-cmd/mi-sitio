import React from 'react';

export default () => {
  return(
    <div className="max-w-5xl mx-auto mt-12 shadow border-b-4 bg-white">
    <header className="text-center">
        <h2 className="text-2xl font-bold text-black h-15">Educación profesional</h2>
        <u><p>Presentacion de educación Profesional</p></u>
    </header>
    <div className="mx-auto overflow-x-auto">
        <ul className="estudy-list  text-center">
            <li className="font-bold text-pink-500">
                Ing. Industrial
                <p className="font-normal text-black">Universidad ECCI</p>
                <u><p className="font-normal text-black">Estado: Finalizado</p></u>
                <p className="font-normal text-black">Año: 2019</p>
            </li>
            <li className="font-bold text-pink-500">
                Ing. Electrica
                <p className="font-normal text-black">Universidad Distrital Francisco Jose de Caldas</p>
                <u><p className="font-normal text-black">Estado: En curso</p></u>
                <p className="font-normal text-black">Año: 2021</p>
            </li>
        </ul>
    </div>
    <div>
        <header className="text-center p-2 mt-14">
            <h2 className="text-2xl font-bold text-black">Educación Tecnológica</h2>
            <u><p>Presentacion de educación Tecnológica</p></u>
        </header>
        <div className="mx-auto overflow-x-auto">
            <ul className="text-center">
                <li className="font-bold text-pink-500">
                    Tecnologo en Gestion de Procesos Industriales
                    <p className="font-normal text-black">Universidad ECCI</p>
                    <u><p className="font-normal text-black">Estado: Finalizado</p></u>
                    <p className="font-normal text-black">Año: 2017</p>
                </li>
            </ul>
    </div>
    </div>
    
    </div>
  )  
};