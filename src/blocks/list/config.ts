import { Block } from 'payload';

export const List: Block = {
  slug: 'list',
  fields: [
    {
      name: 'rows',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          type: 'array',
          name: 'cells',
          label: 'Row Cells',
          required: true,
          fields: [
            {
              type: 'text',
              name: 'value',
              label: 'Cell Value',
            },
          ],
        },
      ],
    },
  ],
};