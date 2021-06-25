export default async function(){
    const response = await fetch("https://api.github.com/users/beta-cmd/repos");
    let myRepos = await response.json();

    return myRepos;
}