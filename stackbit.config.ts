import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    ssgName: "custom",
    buildCommand: "echo 'No build required'",
    publishDir: ".",
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ["content"],
            models: [
                {
                    name: "Page",
                    type: "page",
                    urlPath: "/{slug}",
                    filePath: "content/pages/{slug}.md",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "content", type: "markdown", required: true }
                    ]
                }
            ],
        })
    ]
});
