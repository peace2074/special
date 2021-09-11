<script lang="ts">
import { ref,  reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { _To } from 'waelio-utils'
import { gun } from '../modules/gun'
import { ModelObj } from 'vue-3d-model';

export default {
  setup() {
    const { t } = useI18n()
    const site = reactive(gun.get('waelio'))
    // site.put({ url: 'waelio.com' })
    const url = ref(site.get('url'))
    // const abc = defineComponent(ModelObj)
    // eslint-disable-next-line no-console
    console.log('%cindex.vue line:20 url', 'color: #007acc;', url)
    return {
      t,
      site,
      url,
      // abc
    }
  },

}
</script>

<template>
  <div>
    <pre>site: {{ url }}</pre>
    <!-- <abc src="example/models/obj/LeePerrySmith.obj"></abc> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
