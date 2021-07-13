<template>
  <div class="comp"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {},
  filters: {}
})
export default class Test extends Vue {
  created() {}

  mounted() {
    // mounted
  }

  // data
  public data = ''

  // computed
  public get computedDemo(): string {
    return this.data.toString()
  }

  // props
  @Prop({ default: '' }) private basePath!: string

  // methods
  public methodOne(): void {}

  @Watch('data', { immediate: true, deep: true })
  onDataChanged(newVal: string, oldVal: string) {}
}
</script>

<style scoped lang="scss">
.comp {
}
</style>
