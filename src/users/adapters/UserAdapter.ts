import { hash } from "bcrypt";
import { CreateUserDto, UpdateUserDto } from "../dto";
import { IUserAdapter } from "./IUserAdapter";

export class UserAdapter implements IUserAdapter {
  async handleCreateUser(createdUser: CreateUserDto): Promise<CreateUserDto> {
    console.log('user', createdUser)
    const hashedPass = await hash(createdUser.password, +process.env.PASS_SALTS);
    return {
      ...createdUser,
      password: hashedPass,
    }
  }

  async handleUpdateUser(updatedUser: UpdateUserDto) {
    if(updatedUser.password) {
      const hashedPass = await hash(updatedUser.password, +process.env.PASS_SALTS);
      return {
        ...updatedUser,
        password: hashedPass,
      }
    }

    return {
      ...updatedUser,
    }
  }
}