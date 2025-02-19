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
      // prettier 专注于代码的美观度 (格式化工具)
      // 前置：
      // 1. 禁用格式化插件 prettier format on save 关闭
      // 2. 安装 ESLint 插件, 并配置保存时自动修复
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
      // ESLint 关注于规范, 如果不符合规范，报错
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'], // vue 组件名称多单词组成（忽略 index.vue）
        },
      ],
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验 (props解构丢失响应式)
      // 添加未定义变量错误提示
      'no-undef': 'error',
      // 禁用多根元素检查
      'vue/no-multiple-template-root': 'off', // 允许多个根元素
    },
  },
  skipFormatting, // 让 prettier 仅在 ESLint 中作为格式化工具
]
