// Scheme to validate a potato object
import { z } from "zod";

export const potatoSchema = z.object({
  id: z.string().uuid({ message: "ID must be a valid UUID" }),
  name: z.string().trim().min(1, { message: "Name is required" }),
  head: z.string().trim().min(1, { message: "Head is required" }),
  body: z.string().trim().min(1, { message: "Body is required" }),
});

export type Potato = z.infer<typeof potatoSchema>;
