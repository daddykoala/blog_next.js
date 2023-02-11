// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';

export default function handler (req, res){

  if (req.method === "GET" ){

    res.status(200).json({data:"youhou"})

  }
}