export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601926c651589786c4b30b43',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-crpodx35',
                  apiId: '7ef17af6-e038-4531-8a43-acfa803ce2b2'
                },
                {
                  buildHookId: '601926c78363b4662f05011f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-en9jdhph',
                  apiId: '898f1865-23fd-4d49-acad-c0cb9f42c09a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aukoyy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-en9jdhph.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
