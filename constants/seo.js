export const createSEOMeta = (data) => [
  { hid: 'description', content: data.description },
  { hid: 'author', content: data.author },
  { hid: 'og:title', property: 'og:title', content: data.title },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description,
  },
  { hid: 'og:image', property: 'og:image', content: data.image },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url,
  },
  {
    hid: 'og:type',
    property: 'og:type',
    content: data.type
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: data.cardType || 'summary_large_image',
  },
  {
    hid: 'twitter:creator',
    name: 'twitter:creator',
    content: data.twitterCreator
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: data.description
  }
]
