import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Liste(props) {
  console.log(props);
  const router = useRouter()
  return (
    <div className="container">
      <h1> Vocabulaire de base</h1>
      <h2>{router.query.liste.charAt(0).toUpperCase()+ router.query.liste.slice(1)}</h2>
      <table>
        <tbody>
          {props.listeEnCours.map((element) => {
            return (
              <tr key={uuidv4}>
                <td>{element.en}</td>
                <td>{element.fr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const liste = context.params.liste;
  const data = await import(`../../data/pathsvoc.json`);

  const listeEnCours = data.englishList.find(
    (element) => element.name === liste
  );

  return {
    props: {
      listeEnCours: listeEnCours.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("../../data/pathsvoc.json");
  // avec la methode getstatic path on doir retourner un objet avec un tableau de paths qui contient
  // un objet avec un params qui en clefs contient le nom de la variable qui va etre utilisé dans le fichier tres imlortant
  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));
  console.log(data, "je passe par la ");
  return {
    // paths: [
    //     {params: {liste: 'words'}},
    // ],
    paths,
    //fallback: false,va renvoyer une erreur 404 si la page n'est pas dans le tableau
    fallback: false,
  };
}
