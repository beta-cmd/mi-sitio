import React from "react";
import illustration from '../images/img_1.svg';
import Form from '../components/contacts'

export default () => (
    <header className="bg-purple-200">
        <div className="container mx-auto p-4 max-w-5xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-900 text-6xl">
                        Ing. Diego Noel Betancourt Alonso
                    </h1>
                    <p className='text-sm text-font text-pink-800'><u>Correo: noel.inge.phd@gmail.com</u></p>                    
                    <p className='text-sm text-font text-pink-800'>
                        <u><a href='https://www.linkedin.com/in/diego-betancourt' target="_blank" rel="noopener noreferrer">LinkendIn</a></u>
                    </p>
                    <p className='text-sm text-font text-pink-800'>
                        <u>Celular: 3185769858</u>
                    </p>       
                    <p className="text-sm text-purple-900 text-justify">
                        Ingeniero dinámico e innovador, fanatico de los retos con amplias competencias dispuestas a la planificación, control, seguimiento y mejoramiento de procesos financieros, comerciales, logísticos y operativos en todos los niveles organizacionales, de igual modo conocedor de herramientas tecnológicas y de análisis para llevar a cabo cualquier plan de acción con el óptimo de recursos. Analista empedernido, admirador de la ciencia de datos con amplia experiencia en el enrutamiento y trato estadístico de estos, así como veedor de la reduccion de movimientos y la automatizacion teconologica
                    </p>
                </div>
                <img src={illustration} alt="Data analisys" style={{height: "250px"}}></img>
                </div>
                <div className="bg-purple-200">
                <div className="flex-1 container mx-auto p-2 max-w-4xl  mt-1">
                <Form />
                </div>
                </div>
            </div>
    </header>
);