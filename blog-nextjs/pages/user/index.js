import React from 'react'

export default function index(props) {
    console.log(props);
  return (
    <div>index</div>
  )
}


export async function getStaticProps() {
    const data =await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();//le .json() permet de convertir le résultat en json tres important

    return {

        props:{
            users
        }
    }
    
}