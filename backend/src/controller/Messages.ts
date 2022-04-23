import { Request, Response } from "express";
import { Chat } from "src/entities/mongo/Chat";
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
  const { message, from, to, id_chat } = req.body
  try{
    const messageRepository = getMongoRepository(Messages, `mongo`)
    const chatRepository = getMongoRepository(Chat, `mongo`)

    const chatExists = await chatRepository.findByIds([id_chat])

    if(!chatExists[0]){
      throw new Error(`Chat não encontrado`)
    }
    const newMessage = messageRepository.create({
      message,
      from,
      to,
    })

    await messageRepository.save(newMessage)

    chatExists[0].messages = [
      ...chatExists[0].messages,
      newMessage
    ]

    await chatRepository.update({
      id: id_chat
    }, {
      ...chatExists[0]
    })

    return res.json(chatExists[0])
  }catch(err){
    console.log(err)
    return res.status(400).json(err)
  }
}


