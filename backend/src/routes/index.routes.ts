import { Router } from "express";

import UserRoutes from "./user";
import RolesRoutes from "./roles";
import PostsRoutes from "./posts";

const router = Router()

router.use(`/users`, UserRoutes)
router.use(`/roles`, RolesRoutes)
router.use(`/posts`, PostsRoutes)


export default router
