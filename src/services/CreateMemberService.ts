import { getCustomRepository } from "typeorm";
import { MembersRepositories } from "../repositories/MembersRepositories";

interface IMemberRequest {
    name: string;
    email: string;
    age: string;
    sex: string;
    telephone: string;
    admin?: boolean,
}

class CreateMemberService {
    async execute({ name, email, admin, age, sex, telephone }: IMemberRequest) {

        const membersRepositories = getCustomRepository(MembersRepositories)
        if (!email) {
            throw new Error("Email incorrect");
        }

        const memberAlreadyExists = await membersRepositories.findOne({
            email
        })

        if (memberAlreadyExists) {
            throw new Error("Member already exists");
        }

        const member = membersRepositories.create({
            name,
            email,
            admin,
            age,
            sex,
            telephone
        })

        await membersRepositories.save(member)

        return member
    }
}

export { CreateMemberService }