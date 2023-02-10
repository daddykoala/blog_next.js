import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

//pour utiliser les données locales il faut utiliser la function getStaticProps
// et faire passer les données en props
export default function Home(props) {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog des reconvertis dans le developpement web</span>

      <div className="row mt-5">
        <div className="col-12 col-sm-6">
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

        <div className="col-12 col-sm-6">
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
      </div>
    </div>
  );
}
