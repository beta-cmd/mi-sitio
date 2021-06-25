import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default()=>{
    const data = useStaticQuery(graphql`{
    publicacionesJson {
        articlesdesc {
        id
        name
        desc
        institucion
        }
    }
    }`)
    console.log(data)
    return(
        <section>
            <div className="mt-12">
                <div className="max-w-5xl mx-auto bg-white">
                    <header className="text-center">
                        <h2 className="text-2xl font-bold text-center">Mis Publicaciones y Proyectos</h2>
                        <u><p>Presentacion de proyectos y publicaciones</p></u>
                    </header>
                    <div className="shadow flex mt-1 repos-list">
                        {
                            data.publicacionesJson.articlesdesc.map(itemart =>(
                                <div className="shadow mx-auto  bg-white ">
                                    <div className="p-1" style={{width:"320px"}}>
                                        <h4 className="font-bold text-center h-40 overflow-y-hidden">{itemart.name}</h4>
                                        <p className="text-center text-pink-500">{itemart.institucion}</p>
                                        <div className="text-center">
                                            <span className="inline-block bg-purple-800 border-purple-900 text-white p-2 mt-2 radius rounded-3xl border-b-4">{itemart.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}