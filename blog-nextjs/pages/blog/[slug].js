import React from "react";
import { useRouter } from "next/router";

export default function article() {
  const router = useRouter();

  console.log(router);
  console.log(router.query);
  console.log(router.query.slug);
  console.log(router.asPath);
//méthode push pour ramplacer le link de next
  const pushFonction = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={pushFonction}> home</button>
    </div>
  );
}
