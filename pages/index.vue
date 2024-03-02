<template>
  <div>
    <Content
        model="page"
        :apiKey="builderApiKey"
        :content="content"
        :customComponents="REGISTERED_COMPONENTS"
    />
  </div>
</template>

<script setup>
import { Content, fetchOneEntry } from "@builder.io/sdk-vue";
import { REGISTERED_COMPONENTS } from "../init-builder";

const builderApiKey = 'd6029bffb3d340cb848fc12c63627af8';

const content = await fetchOneEntry({
  model: 'page',
  apiKey: builderApiKey,
  userAttributes: {
    urlPath: '/'
  }
})
</script>