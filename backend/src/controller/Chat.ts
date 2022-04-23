import { Request, Response } from "express";
import { Chat } from "src/entities/mongo/Chat";
import { getMongoRepository } from "typeorm";

export async function listChats(req: Request, res: Response){
  try{
    const chatRepository = getMongoRepository(Chat, `mongo`)

    const chats = await chatRepository.find()
    return res.json(chats)
  }catch(err){
    return res.status(400).json(err)
  }
}

export async function createChat(req: Request, res: Response){
  const { participants, name, message } = req.body
  try{
    const chatRepository = getMongoRepository(Chat, `mongo`)

    const chat = new Chat()
    chat.name = name;
    chat.participants = participants;
    chat.messages = message

    await chatRepository.save(chat)

    return res.json(chat)
  }catch(err){
    return res.status(400).json(err)
  }
}


