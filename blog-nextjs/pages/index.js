
import Link from "next/link";

//pour utiliser les données locales il faut utiliser la function getStaticProps
// et faire passer les données en props
export default function Home(props) {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog des reconvertis dans le developpement web</span>

      <div className="row mt-5">
        <div className="col-12 col-sm-6" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100 ">
            <div className="card-body">
              <h5 className="card-title"> Les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {" "}
                Maximisez votre culture web
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
              </p>
              <Link href="/blog">
                Voir les articles
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100 ">
            <div className="card-body">
              <h5 className="card-title"> Les utilisateurs</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {" "}
                Découvrez notre communauté
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
              </p>
              <Link href="/user">
                Voir les utilisateurs
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 mt-4" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100 ">
            <div className="card-body">
              <h5 className="card-title"> Les utilisateurs</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {" "}
                Découvrez notre communauté
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
              </p>
              <Link href="/user">
                Voir les utilisateurs
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 mt-4" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100 ">
            <div className="card-body">
              <h5 className="card-title"> votre mot au hasard </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {" "}
                Cliquez sur un bouton pour voir un mot au hasard
              </h6>
              <p className="card-text">
                ca sert a rien 
              </p>
              <Link href="/randomword">
                Vous voulez quand même y aller ?
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 mt-4" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100 ">
            <div className="card-body">
              <h5 className="card-title"> Ajoutez un mot  </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {" "}
                ajoutez des mots pour pouvoir essayer de tomber dessus quand vous allez essayer d'en trouver un au hasard.
              </h6>
              <p className="card-text">
                Qu'est qu'on se marre !!!!
              </p>
              <Link href="/addwords">
                Apperement vous voulez quand même y aller
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
