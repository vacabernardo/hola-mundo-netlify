import { defineStackbitConfig, DocumentUrlPath } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    ssgName: "custom",
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            assets: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            },
            models: {
                page: {
                    type: 'page',
                    urlPath: '/{slug}',
                    fields: [
                        { type: 'string', name: 'title', required: true },
                        { type: 'string', name: 'description' },
                        { type: 'markdown', name: 'content' }
                    ]
                }
            }
        })
    ]
});
