<template>
  <div class="render-markdown-wrap">
    <VMdPreview :text="md"></VMdPreview>
  </div>
</template>

<script lang="ts" setup>
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);

withDefaults(
  defineProps<{
    md?: string;
  }>(),
  {}
);

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(createTodoListPlugin()); // 任务列表
VMdPreview.use(createCopyCodePlugin()); // 快捷复制代码
</script>

<style lang="scss" scoped>
.render-markdown-wrap {
  :deep(.github-markdown-body) {
    padding: 0px;
    blockquote {
      margin-right: 0;
      margin-left: 0;
    }
  }
  :deep(.github-markdown-body > :last-child) {
    margin-bottom: 0 !important;
  }
}
</style>
