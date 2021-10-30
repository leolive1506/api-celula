import { Request, Response } from "express"
import { CreateMemberService } from "../services/CreateMemberService"


class CreateMemberController {
    async handle(req: Request, res: Response) {
        // recuperar
        const { name, email, admin, age, sex, telephone } = req.body

        const createMemberService = new CreateMemberService()

        const member = await createMemberService.execute({ name, email, admin, age, sex, telephone })

        return res.json(member)
    }
}

export { CreateMemberController }