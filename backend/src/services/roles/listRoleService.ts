import { getRepository } from "typeorm";
import {Role} from "../../entities/Role";

export default async function listRoleService(): Promise<Role[]>{
  const roleRepository = getRepository(Role)
  const roles = await roleRepository.find()

  return roles
}
