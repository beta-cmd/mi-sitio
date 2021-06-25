import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default()=>{
    const data = useStaticQuery(graphql`{
    publicacionesJson {
        software {
            desc
            id
            name
            institucion
        }
        }
    }`)
    console.log(data)
    return(
        <section>
            <div className="mt-12">
                <div className="max-w-5xl shadow border-b-4 mx-auto bg-white">
                    <header className='text-center'>
                        <h2 className="text-2xl font-bold text-center">Habilidades</h2>
                        <u><p>Habilidades y Software de habitual uso</p></u>
                    </header>
                    <div className="flex mt-2  overflow-x-scroll">
                        {
                            data.publicacionesJson.software.map(itemart =>(
                                <div className="shadow  bg-white mr-1">
                                    <div className="p-1"  style={{width:"200px"}}>
                                        <h4 className="font-bold mt-8 text-center h-20 overflow-y-hidden">{itemart.name}</h4>
                                        <p className="text-center text-pink-500">{itemart.institucion}</p>
                                        <div className="text-center">
                                            <span className="inline-block bg-purple-800 text-white p-2 mt-2 radius rounded-3xl border-b-4 border-purple-900">{itemart.desc}</span>
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