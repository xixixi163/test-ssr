<template>
  <div>
    page
    <div v-if="blogData">
      <div v-html="blogData"></div>
      <footer>assss</footer>
  </div>
    </div>
</template>

<script lang="ts" setup>
let blogData = ref('')
// const { data } = await useAsyncData('blog', () => $fetch('https://dev.usemock.com/6763cb666c597482904f2c38/api/console/blog/portal/ids', {
//     method: 'GET'
//   }),{
//     lazy: true
//   })

//   console.log(data)
const describe = ' Are you looking to find a Twilio alternative? There are many tools that promise to become your top alternative to Twilio. Read this guide to discover them!'
// 设置 og 标签
useHead({
  meta: [
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: 'Which is the Top Twilio Alternative in 2025?' },
    { hid: 'og:description', property: 'og:description', content: describe },
    { hid: 'og:image', property: 'og:image', content: 'https://img.engagelab.net/article/en/twilio-alternative.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://xixixi163.github.io/test-ssr/' }
  ]
})

function getBlogInfo() {
  return $fetch('https://dev.usemock.com/6763cb666c597482904f2c38/api/console/blog/portal/ids', {
    method: 'GET'
  }).then(res => {
    // console.log(res)


  })
}
await getBlogInfo()
  
blogData.value = '<div>123</div>'



</script>

<style>

</style>