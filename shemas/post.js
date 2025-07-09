// schemas/post.js
export default {
  name: 'post',
  title: 'Blog Beitrag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Inhalt',
      type: 'blockContent', // definiere ggf. auch blockContent Schema
    },
  ],
};
