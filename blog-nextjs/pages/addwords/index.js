import { useRef } from "react";
//attention à bien mettre le nom de la fonction avec une majuscule avant le deploiement sinon il ne sait pas que c'est un composant react
export default function AddWords() {
  const enWord = useRef();
  const frWord = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    //je veux ajoiuter un mot dans mon fichier json
    //je crée un objet avec les valeurs de mes inputs
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };
    // avec fetch je stipule que je veux faire un post
    fetch("api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      //important pour le format json toujours mettre le header écrit exactement comme ça
      headers: { "Content-Type": "application/json" },
    })
      //ne pas oublier de paramtrer le dossier api en serverless function
      .then((res) => res.json())
      .then((data) => console.log(data));

    // je vide mes inputs
    enWord.current.value = "";
    frWord.current.value = "";
  };
  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addEn" className="form-label">
          ajouter un mot en anglais
        </label>
        <input ref={enWord} type="text" className="form-control" id="addEn" />

        <label htmlFor="addFr" className="form-label">
          ajouter un mot en francais
        </label>
        <input ref={frWord} type="text" className="form-control" id="addFr" />

        <button className="btn btn-primary mt-4"> Ajouter </button>
      </form>
    </div>
  );
}
