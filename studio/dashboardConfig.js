export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '629a55836d7c980225366e83',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cuguk2z3',
                  apiId: '2ef75a57-b475-4d97-bb71-082e2cbabdeb'
                },
                {
                  buildHookId: '629a558361970600c2a10b5e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zzrvz4qy',
                  apiId: '36ab8279-9afb-4319-b1c4-915847568d6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sridhar02/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zzrvz4qy.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
