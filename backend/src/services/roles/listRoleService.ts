import { User } from "src/entities/User";
import { getRepository } from "typeorm";

export default async function listRoleService(): Promise<User[]>{
  const userRepository = getRepository(User)
  const users = await userRepository.find({
    relations: [`role`]
  })

  return users
}
