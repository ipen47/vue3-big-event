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
    rules: {
      // prettier专注于代码的美观度 (格式化工具)
      // 前置：
      // 1. 禁用格式化插件 prettier  format on save 关闭
      // 2. 安装Eslint插件, 并配置保存时自动修复
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, // 无分号
          printWidth: 80, // 每行宽度至多80字符
          trailingComma: 'none', // 不加对象|数组最后逗号
          endOfLine: 'auto', // 换行符号不限制（win mac 不一致）
        },
      ],
      'vue/no-multiple-template-root': 'off', // 禁用多根元素检查
    },
  },
  skipFormatting,
]
