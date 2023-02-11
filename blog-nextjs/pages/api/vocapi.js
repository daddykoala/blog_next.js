// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';
// important pour la gestion des fichiers
//la fonction doit s'appelet handler
export default function handler (req, res){

  if (req.method === "GET" ){
    console.log(`Current directory: ${process.cwd()}`);
    const filePath = path.join(process.cwd(),'data','liste.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    res.status(200).json({data})

  }
}