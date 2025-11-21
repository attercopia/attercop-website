import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services/index.html'),
                peFirms: resolve(__dirname, 'pe-firms/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),
                knowledgeEngineering: resolve(__dirname, 'services/knowledge-engineering/index.html'),
                portfolio: resolve(__dirname, 'portfolio/index.html'),
                caseStudies: resolve(__dirname, 'case-studies/index.html'),
            },
        },
    },
});
