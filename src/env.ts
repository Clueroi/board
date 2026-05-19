import { z } from "zod";

const ClientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url().optional().default("http://localhost:3000")
});

export const ClientEnv = ClientEnvSchema.parse(process.env);
