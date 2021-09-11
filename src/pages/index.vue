<script lang="ts">
import { ref, onMounted, resolveComponent, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { _To } from 'waelio-utils'
import { gun } from '../modules/gun'
import { ModelObj } from 'vue-3d-model';

export default {
  setup() {
    const { t } = useI18n()
    const site = gun.get('waelio')
    site.put({ url: 'waelio.com' })
    const url = site.get('url')
    // eslint-disable-next-line no-console
    console.log('%cindex.vue line:20 url', 'color: #007acc;', url)
    return {
      t,
      site,
      url,
    }
  },

}
</script>

<template>
  <div>
    <pre>site: {{ url }}</pre>
    <ModelObj src="example/models/obj/LeePerrySmith.obj"></ModelObj>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
