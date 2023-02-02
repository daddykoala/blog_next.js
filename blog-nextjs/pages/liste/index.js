import Link from "next/link";
import {v4 as uuidv4} from "uuid";

export default function Liste(props) {
  console.log(props);

  return (
    <div className="container">
      <h1 className="my-4">vocabulaire</h1>
      <ul className="list-group">
        

      </ul>
      {props.array.map((element) =>(
        <li key={uuidv4()} className="list-group-item">
            <Link href={Object.keys(element)[0]}>
                {Object.keys(element)[0]}
            </Link>
            
        </li>

        )
      )}
    </div>
  );
}

export async function getStaticProps() {
  const data = await import("../../data/pathsvoc.json");
  console.log(data);
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
