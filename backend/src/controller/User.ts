import { Request, Response } from "express";
import listRoleService from "src/services/roles/listRoleService";
import createUserService from "src/services/users/createUsersService";

export async function listUser(req: Request, res: Response){
  try{
    const roles = await listRoleService()

    return res.json(roles)
  }catch(err){
    return res.status(400).json(err)
  }
}

export async function createUser(req: Request, res: Response){
  try{
    const { name, id_role, email, password } = req.body

    const createdUser = await createUserService({ name, id_role, email, password })

    return res.json(createdUser)
  }catch(err){
    return res.status(400).json(err)
  }
}


