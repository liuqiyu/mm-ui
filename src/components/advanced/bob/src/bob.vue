<template>
  <div class="asp-bob">bob</div>
</template>

<script>
import mixins from '@/utils/mixins/index.js'

export default {
  name: 'asp-bob',
  mixins: [mixins],
  mounted () {
    console.log(this.$ASPWEBLIB)
  }
}
</script>