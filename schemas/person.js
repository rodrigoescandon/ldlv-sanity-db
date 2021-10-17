export default {
  name: 'person',
  title: 'Persona',
  type: 'document',
  fields: [
    {
      name: 'whatsappId',
      title: 'ID WhatsApp',
      type: 'string',
    },
    {
      name: 'givenName',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Apellido',
      type: 'string',
    },
    {
      name: 'birthDate',
      title: 'Birth date',
      type: 'date'
    },
    {
      name: 'city',
      title: 'Ciudad',
      type: 'string',
    },
    {
      name: 'state',
      title: 'Estado',
      type: 'string',
    },
    {
      name: 'country',
      title: 'País',
      type: 'string',
    },
    {
      name: 'owner',
      title: 'Is owner of their home',
      type: 'boolean',
    },
    {
      name: 'consent',
      title: 'Consents to sharing stories',
      type: 'boolean',
    },
    {
      name: 'stories',
      title: 'Historias',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'story' },
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'whatsappId',
    },
  },
}
