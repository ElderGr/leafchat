import { Router } from "express";
import UserRoutes from "./user";
import RolesRoutes from "./roles";


const router = Router()

router.use(`/users`, UserRoutes)
router.use(`/roles`, RolesRoutes)

export default router
