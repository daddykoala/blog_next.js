// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import path from "path";
// important pour la gestion des fichiers
//la fonction doit s'appelet handler
export default function handler(req, res) {
  if (req.method === "GET") {
    console.log(`Current directory: ${process.cwd()}`);
    const filePath = path.join(process.cwd(), "data", "liste.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    console.log(data);
    res.status(200).json(data);
  } else if (req.method === "POST") {
    console.log(req.body);
    //je recupère les données de mon formulaire
    //je recupere mon fichier json
    const filePath = path.join(process.cwd(), "data", "liste.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    console.log(data);
    //je pousse mes données dans mon fichier json
    data.vocabulary.push(req.body);
    fs.writeFileSync(filePath, JSON.stringify(data));
    //je veux écrire dans mon fichier json
    res.status(201).json({ message: "ok" });
  }
}
