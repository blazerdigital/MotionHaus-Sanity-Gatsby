export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '637ae0cee090c24076bee880',
                  title: 'Sanity Studio',
                  name: 'motionhaus-sanity-gatsby-studio',
                  apiId: '0bd93c95-2f6e-46a2-bf65-7bd2b514a076'
                },
                {
                  buildHookId: '637ae0ce05fb0439f9a83f04',
                  title: 'Portfolio Website',
                  name: 'motionhaus-sanity-gatsby',
                  apiId: 'd3fba150-0c64-4bb9-9070-a1b663a6c1e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blazerdigital/MotionHaus-Sanity-Gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://motionhaus-sanity-gatsby.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
