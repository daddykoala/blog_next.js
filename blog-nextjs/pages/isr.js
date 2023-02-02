import React from "react"

export default function contact(props) {
  console.log(props);
  return <div>isr</div>;
}

export async function getStaticProps() {
  console.log("OLA1")
  const quote = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  console.log(quote,"OLA2");
  const data = await quote.json()

  return {
    props: {
      data
    },
    // revalidate: 10 va permettre de recharger la page toutes les 10 secondes
    revalidate: 10
  };
}

//https://goquotes-api.herokuapp.com/api/v1/random?count=1
