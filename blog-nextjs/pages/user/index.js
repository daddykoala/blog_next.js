import React from 'react'
import {v4 as uuid4} from 'uuid'
import Link from 'next/link'
export default function index(props) {
    console.log(props);
  return (
    <div className='container px-4 pt-5'>
        <h1 className="text-center">Liste des utilisateurs</h1>
        <div className="rows justify-content-center mt-5">
            {props.users.map(user=>(
            <div key={uuid4}className='col-12 col-lg-6 m-3'>
                <div className='card'>
                    <div className="card-body d-flex justify-content-between">
                        <h5 className='card-title'>{user.username}</h5>
                        <Link href={`user/${user.id}`} className='ml-auto card-link'>Contacter</Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
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