import { defineType, defineField } from 'sanity'

export const schema = {
  name: 'default',
  types: [
    defineType({
      name: 'post',
      title: 'Post',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
      ],
    }),
  ],
}
