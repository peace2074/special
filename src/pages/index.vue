/* eslint-disable no-console */
<script lang="ts">
import { ref, reactive,computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGun } from 'src/useGun'
import { _To } from 'waelio-utils'
// import { ModelObj } from 'vue-3d-model';


export default {
  setup() {
    const { t } = useI18n()
    const MyGun = useGun
    const gun = MyGun.gun
    const site = gun
    .get('waelio')
    .put({ url: 'waelio.org' })

    const getGunValue = (v: string) => {
      return site.get(v).on((data)=>{
        return data
      })
    }
    const url = computed(() => getGunValue('url')) || ref('Loading...')

    // eslint-disable-next-line no-console
    console.log('%cindex.vue line:20 url', 'color: #007acc;', url.value)
    return {
      t,
      MyGun,
      gun,
      site,
      url,
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
