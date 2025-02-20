import { Block } from 'payload';

export const Table: Block = {
  slug: 'table',
  fields: [
    {
      name: 'columns',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          type: 'text',
          name: 'header',
          label: 'Column Header',
          required: true,
        },
      ],
    },
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
            {
              type: 'text',
              name: 'link',
              label: 'Cell Link (Optional)',
            },
          ],
        },
      ],
    },
  ],
};