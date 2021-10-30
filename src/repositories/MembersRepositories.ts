import { EntityRepository, Repository } from "typeorm";
import { Members } from "../entity/Members";

@EntityRepository(Members)
class MembersRepositories extends Repository<Members> {

}

export { MembersRepositories }