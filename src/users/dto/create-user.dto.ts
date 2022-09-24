import { ROLES } from "~/enums";
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const CreateUserSchema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string().min(3, 'Mínimo de 3 caracteres'),
  password: z.string(),
  role: z.enum([ROLES.ADMIN, ROLES.USER])
})

export class CreateUserDto extends createZodDto(CreateUserSchema) {}