import { ConfigModule as CModule } from "@nestjs/config"

export const ConfigModule = CModule.forRoot({
  envFilePath: ['.env.dev', '.env.prod'],
})