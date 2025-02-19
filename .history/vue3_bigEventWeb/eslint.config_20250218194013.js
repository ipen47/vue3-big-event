import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
   // 添加规则配置
  {
    rules: {
      'no-console': 'warn', // 禁用 console 语句，但仅作为警告
      'vue/multi-word-component-names': 'error', // 强制 Vue 组件名使用多词形式
      'jsx-quotes': ['error', 'prefer-double'], // JSX 中优先使用双引号
      '@typescript-eslint/explicit-function-return-type': 'error', // TypeScript 函数显式返回类型
    },
  },

  },
  skipFormatting,

]
