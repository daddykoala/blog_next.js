import React from 'react'

export default function article(props) {
    console.log(props);
  return (
    <div>article</div>
  )
}



//? le context vient directement de getStaticProps?
export async function getStaticProps(context) {
    //je defini un id qui est egal a l'id de l'article
    const id = context.params.article;
    //je recupere les articles
    const data =await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await data.json();//le .json() permet de convertir le résultat en json très important
    return {
        props:{
            article,}

    }
}






//ici on veut afficher des pages dynamique on choisit la methode getStaticPaths

export async function getStaticPaths() {

    const data =await fetch ("https://jsonplaceholder.typicode.com/posts");
    const articles = await data.json();//le .json() permet de convertir le résultat en json tres important

    const paths = articles.map((item) => ({
        params:{article:item.id.toString()}
         }))

         return {
            paths,
            fallback:false//toujours preciser fallback false pour retourner une erreur 404 si la page n'existe pas
         }
}
