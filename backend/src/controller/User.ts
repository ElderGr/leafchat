import { Request, Response } from "express";

export function listUser(req: Request, res: Response){
  return res.json({
    mss: `teste`
  })
}

export function createUser(req: Request, res: Response){
  return res.json({
    mss: `teste`
  })
}


