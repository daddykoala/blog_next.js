import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index(props) {
  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Salut les Loulous</h1>
      <p className="text-center">Voici les articles</p>
      <div className="row g-3 mt-4">
        {props.articles.map((article) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={uuidv4}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.body.slice(0, 100) + "..."}
                </p>
                <Link href={`/blog/${article.id.toString()}`}>Lire</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//nous n'avons pas de chemin dynamique alors nous choisissons la methode get static props
export async function getStaticProps() {
  //je vais chercher mes données dans un fichier json
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  return {
    props: {
      articles,
    },
  };
}
