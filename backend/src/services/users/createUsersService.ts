import { Role } from "src/entities/Role";
import { User } from "src/entities/User";
import { getRepository } from "typeorm";

interface IRequest {
  name: string;
  id_role: string;
  email: string;
  password: string;
}

export default async function createUserService({
  email,
  id_role,
  name,
  password
}: IRequest): Promise<User>{
  const userRepository = getRepository(User)
  const roleRepository = getRepository(Role)

  const roleExists = await roleRepository.findOne({
    where: {
      id: id_role
    }
  })

  if(!roleExists){
    throw new Error("Role not found")
  }


  const createdUser = userRepository.create({
    email,
    name,
    id_role,
    password
  })

  await userRepository.save(createdUser)

  return createdUser
}
