<template>
  <div>
    list
    <asp-bob></asp-bob>
    <asp-test></asp-test>
    <asp-link type="primary">主要链接</asp-link>
    <!-- <test1></test1> -->
    <asp-button type="primary"
                size='small'
                round>1w3</asp-button>
    <asp-input v-model="aaa"></asp-input>
  </div>
</template>

<script>
// import test1 from 'aspire-ui111/lib/test'
// import index from 'asp-web-lib-demo/lib/mixins/index.js'

export default {
  name: 'list',
  // mixins: [index],
  components: {
    // test1
  },
  data () {
    return {
      aaa: 123
    }
  }
}
</script>

<style scoped lang="scss">
</style>