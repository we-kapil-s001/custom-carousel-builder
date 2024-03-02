<template>
  <div>
    <Content
        model="page"
        apiKey="d6029bffb3d340cb848fc12c63627af8"
        :content="content"
        :customComponents="REGISTERED_COMPONENTS"
    />
  </div>
</template>

<script setup>
import { Content, fetchOneEntry } from "@builder.io/sdk-vue";
import { REGISTERED_COMPONENTS } from "../init-builder";

const content = await fetchOneEntry({
  model: 'page',
  apiKey: 'd6029bffb3d340cb848fc12c63627af8',
  userAttributes: {
    urlPath: '/'
  }
})
</script>