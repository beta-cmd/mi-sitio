import React from 'react';

export default () => {
  return(
    <div className="max-w-5xl mx-auto mt-12 shadow border-b-4 bg-white">
    <div>
        <header className="text-center p-2 mt-14">
            <h2 className="text-2xl font-bold text-black">Mis Logros</h2>
            <u><p>Presentacion de distinciones y premios</p></u>
        </header>
        <div className="mx-auto overflow-x-auto">
            <ul className="text-center">
                <li className="font-bold text-black">
                    Beca de pregrado
                    <p className="font-normal text-pink-700">Universidad ECCI</p>
                    <u><p className="font-normal text-black">Corporacion Monteverde</p></u>
                    <p className="font-normal text-black">Año: 2014</p>
                </li>
            </ul>
    </div>
    </div>
    <div className="mx-auto overflow-x-auto">
        <ul className="estudy-list  text-center">
            <li className="font-bold text-black">
                Medalla a la excelencia academica "Leidy Lisbet Martinez"
                <p className="font-normal text-pink-700">Universidad ECCI</p>
                <u><p className="font-normal text-black">Grado: Tecnologia</p></u>
                <p className="font-normal text-black">Año: 2017</p>
            </li>
            <li className="font-bold text-black">
                Medalla a la excelencia academica "Leidy Lisbet Martinez"
                <p className="font-normal text-pink-700">Universidad ECCI</p>
                <u><p className="font-normal text-black">Grado: Ingenieria</p></u>
                <p className="font-normal text-black">Año: 2019</p>
            </li>
        </ul>
    </div>
    
    
    </div>
  )  
};