export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6172a9e14ef3e8249e315d9a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9r6zi9x8',
                  apiId: '21bcfc4f-e182-4efd-88be-87bd703afd71'
                },
                {
                  buildHookId: '6172a9e183c48a0e35d360d3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p3ut6fsp',
                  apiId: '1178e549-e736-41a8-b8c0-74caaada591a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drgnlrd/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p3ut6fsp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
