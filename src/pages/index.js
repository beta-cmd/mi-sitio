import React from "react";
import Header from '../components/header'; 
import Repositories from '../components/repos';
import Publicaciones from '../components/publicaciones';
import Education from "../components/education";
import Cursos from '../components/cursos';
import Logros from '../components/logros';
import Software from '../components/software';

export default function Home() {
  return (
  <div>
      <Header /> 
      <Education />
      <Logros />
      <Cursos />
      <Publicaciones />
      <Software />
      <Repositories />
      <div className='mt-20'>
          <div className='py-20 h-30 bg-purple-200 border-b-4 border-black'>
            <h1 className='text-bold text-center text-6xl font-bold text-purple-900 text-font-serif'>
              Gracias por visitarme!!!!
            </h1>
          </div>
      </div>
  </div>
  )
}
