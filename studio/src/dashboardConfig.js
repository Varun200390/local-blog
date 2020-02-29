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
                  buildHookId: '5e5a3d6053bf64c1c1a3b980',
                  title: 'Sanity Studio',
                  name: 'local-blog-studio',
                  apiId: '59385a1a-a896-4cd6-9955-e530bda250d1'
                },
                {
                  buildHookId: '5e5a3d6096114bc054608447',
                  title: 'Blog Website',
                  name: 'local-blog',
                  apiId: '89cabd05-a8fa-4ec1-ba03-7f678664b614'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Varun200390/local-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://local-blog.netlify.com', category: 'apps' }
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
