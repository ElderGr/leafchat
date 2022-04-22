import { Request, Response } from "express";
import { Messages } from "src/entities/mongo/Messages";
import { getMongoRepository } from "typeorm";

export async function listMessages(req: Request, res: Response){
  try{
    const messageRepository = getMongoRepository(Messages, `mongo`)

    const messages = await messageRepository.find()
    return res.json(messages)
  }catch(err){
    return res.status(400).json(err)
  }
}

export async function createMessage(req: Request, res: Response){
  const { message, from, to } = req.body
  try{
    const messageRepository = getMongoRepository(Messages, `mongo`)

    const newMessage = messageRepository.create({
      message,
      from,
      to,
    })

    await messageRepository.save(newMessage)
    return res.json(newMessage)
  }catch(err){
    return res.status(400).json(err)
  }
}


