import React from 'react'


//on ne va pas utiliser le wrapper ici car on veut que la page 404 soit
//la seule page qui n'est pas englobée par le wrapper
// attention ne jamais mettre seulement un nombre sur un function component ca ne marche pas.
//next gere les 404 automatiquement lorsqu'on a un fichier 404.js dans le dossier pages.
export default function Error404() {
  return (
    <div>woops 404 Error404</div>
  )
}
