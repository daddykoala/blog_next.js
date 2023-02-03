

export default function Liste(props) {

    console.log(props);
  return (
    <div>hello liste</div>
  )
}


export async function getStaticProps(context){
    console.log(context);
        const liste = context.params.liste;
        const data = await import(`../../data/pathsvoc.json`);
    
        const listeEnCours = data.englishList.find((element) => element.name === liste);
    
        return {
            props: {
                listeEnCours: listeEnCours.data,
        }
    
    }
    }

export async function getStaticPaths(){
    const data = await import('../../data/pathsvoc.json');
    // avec la methode getstatic path on doir retourner un objet avec un tableau de paths qui contient 
    // un objet avec un params qui en clefs contient le nom de la variable qui va etre utilisé dans le fichier tres imlortant
    console.log(data,"je passe par la ");
    return {
        paths: [
            {params: {liste: 'words'}},
        ],
        //fallback: false,va renvoyer une erreur 404 si la page n'est pas dans le tableau
        fallback: false
    }
}


