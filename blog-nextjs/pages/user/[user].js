import React from 'react'

export default function user(props) {
    console.log(props);
  return (
    <div>user</div>
  )
}

export async function getStaticProps(context){
    //je recupere l'id de l'utilisateur
    const id = context.params.user;

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await data.json();
    return{
        props:{
            user
        }
    }
}
export async function getStaticPaths(){

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    const paths = users.map(item=>(
        {params:{user:item.id.toString()}}
    ))
    return{
        paths,
        fallback:false
    }
}