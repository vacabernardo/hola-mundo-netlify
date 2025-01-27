import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    ssgName: "custom",
    nodeVersion: '18',
    contentSources: [
        {
            name: 'content',
            handler: '@stackbit/cms-git',
            options: {
                rootPath: __dirname,
                contentDirs: ['content'],
                models: {
                    page: {
                        type: 'page',
                        urlPath: '/{slug}',
                        fields: [
                            { type: 'string', name: 'title', required: true, default: 'Nueva Página' },
                            { type: 'string', name: 'description', default: 'Descripción de la página' },
                            { type: 'markdown', name: 'content', default: 'Contenido de la página' }
                        ]
                    }
                }
            }
        }
    ],
    presets: [
        {
            label: 'Default',
            models: [{
                type: 'page',
                urlPath: '/{slug}',
                fields: [
                    { type: 'string', name: 'title' },
                    { type: 'markdown', name: 'content' }
                ]
            }]
        }
    ]
});
