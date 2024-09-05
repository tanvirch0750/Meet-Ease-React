import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const roomSchema = z.object({
  name: z.string(),
  _id: z.string(),
  roomNo: z.number(),
  floorNo: z.number(),
  capacity: z.number(),
  pricePerSlot: z.number(),
  // amenities: z.array(z.string()),
  // images: z.array(z.string()),
  // category: z.string(),
  description: z.string(),
  isFeatured: z.boolean().optional(),
});

export type Room = z.infer<typeof roomSchema>;
