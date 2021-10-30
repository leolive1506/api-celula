import { Router } from "express"
import { CreateMemberController } from "./controllers/CreateMemberController"

const routes = Router()

const createMemberController = new CreateMemberController()

routes.post("/new-member", createMemberController.handle)

export { routes }