export default {
  name: 'story',
  title: 'Historia',
  type: 'document',
  fields: [
    {
      name: 'public',
      title: 'Public',
      type: 'boolean',
    },
    {
      name: 'publishedAt',
      title: 'Publicado',
      type: 'datetime',
    },
    {
      name: 'recording',
      title: 'Grabación',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'publishedAt',
    },
  },
}
