import type { CollectionConfig } from "payload";

export const Policy: CollectionConfig = {
  slug: "policies",
  auth: false,
  access: {
    read: () => true,
  },
  labels: {
    singular: "Policy",
    plural: "Policies",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Content",
      required: true,
    },
  ],
};
