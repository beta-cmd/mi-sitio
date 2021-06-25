import React, { useEffect, useState } from 'react';
//import repos from '../data/repos'
import Repos from '../components/repo'
//import fetchRepos from '../libs/fetchRepos';

export default () => {

    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect(()=>{

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            //myRepos = myRepos.slice(1,10);
            setReposCount(myRepos.length);

            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/beta-cmd/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            //Esta linea ayuda guardar en el storage del navegador la api, con eso no la consulto
            //todo el tiempo 
            sessionStorage.setItem("repos",JSON.stringify(myRepos))
            setRepos(myRepos);
        }
        fetchRepos();
    },[]);


    return (
        <div className="max-w-5xl mx-auto mt-12 py-6 shadow border-b-4 bg-white">
        <header className="text-center">
            <h2 className="text-2xl font-bold text-black">Mi trabajo en Open Source</h2>
            <u><p>Colaboración y contribución de código</p></u>
        </header>
        <ul className="repos-list">
            {
                repos.map((repo)=>{
                    return <Repos repo={repo} key={repo.id} />
                })
            }
        </ul>
        <div className="mt-8 text-center">
            <a href="https://github.com/beta-cmd" className="btn" target="_blank" rel="noopener noreferrer"
            >Ver mas en github ({reposCount})</a>
        </div>
        </div>
    );
};