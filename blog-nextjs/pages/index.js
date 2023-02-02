

import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/component/Navbar/Navbar'




//pour utiliser les données locales il faut utiliser la function getStaticProps
// et faire passer les données en props
export default function Home(props) {

  console.log(props);

  const id = "article"
  return (
    <>
    
    <div className={styles.container}>
    <h1> Vocabulaire de base</h1>
    <table className={styles.tableau}>
      <tbody>
        {/* si dans la methode maps on a un seul parametre on peut l'ecriture sans parenthese
        si l'on met des parenthes et des crochets on doit !!! mettre un return !!! 
        les parentheses induisent le return pas les crochets*/}
        {props.array.map((element) => {
          return(

          <tr>
            <td>{element.en}</td>
            <td>{element.fr}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
    
    </div>
    </>
    
  )
}

//getStaticProps va s'executer seulement losqu'on va build notre application l'on pourrait mettre des credentials ici ou des clefs d'api etc... 
//la function get static props est une function qui va nous permettre de récupérer des données avant que la page soit rendue.
export async function getStaticProps() {
  //j'utilise la methode import pour importer les données locales.
 const data = await import ('../data/vocabulary.json')
 //je les assigne dans un tableau
 const array = data.vocabulary;
//je verifie que le tableau n'est pas vide 
//si il est vide je retourne un objet avec un props notfound a true
//  if (array.lenght === 0) {
//     return {
//       notfound: true
//     }
//   }

//je peux renvoyer aussi un objet avec un redirect qui va me rediriger vers une autre page
if (array.lenght === 0) {
  return {
    redirect:{
      destination: '/',
    } 
  }
}

//tres important je retounre un objet avec un props qui contient le tableau
 return{
  props:{
    array
  }
 }
}