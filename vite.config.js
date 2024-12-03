import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json' assert { type: 'json' } // Node >=17

const viteManifestHackIssue846 = {
  // 解决报错 [crx:content-script-resources] Error: vite manifest is missing
  // Workaround from https://github.com/crxjs/chrome-extension-tools/issues/846#issuecomment-1861880919.
  // https://github.com/crxjs/chrome-extension-tools/issues/846
  name: 'manifestHackIssue846',
  renderCrxManifest(_manifest, bundle) {
    bundle['manifest.json'] = bundle['.vite/manifest.json']
    bundle['manifest.json'].fileName = 'manifest.json'
    delete bundle['.vite/manifest.json']
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), viteManifestHackIssue846, crx({ manifest }),],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html'
      },
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]', // 静态资源
        chunkFileNames: 'js/[name]-[hash].js', // 代码分割中产生的 chunk
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  }
})
