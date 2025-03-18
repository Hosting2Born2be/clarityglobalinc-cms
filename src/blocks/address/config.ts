import { Block } from 'payload';

export const Address: Block = {
  slug: 'address',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
};