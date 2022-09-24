import { CreateUserDto, UpdateUserDto } from "../dto";

export interface IUserAdapter {
  handleCreateUser(createdUser: CreateUserDto): Promise<CreateUserDto>
  handleUpdateUser(updateUser: UpdateUserDto): Promise<UpdateUserDto>
}