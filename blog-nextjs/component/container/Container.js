import React from 'react'
import Navbar from '../Navbar/Navbar'


//ici nous avons un composant qui va englober tout les autres composants
//il va nous permettre de ne pas avoir a répéter le code de la navbar
//dans chaque composant
//on appelle ca un wrapper
export default function Container(props) {
  return (
    <div>
        <Navbar/>
        {props.children}
    </div>
  )
}
