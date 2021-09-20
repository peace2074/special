/* eslint-disable no-console */
<script lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { UseGun } from '../useGun'

export default {
  setup() {
    const { t } = useI18n()
    const MyGun = new UseGun()
    const gun = MyGun.gun
    const site = gun.get('waelio')
    site.put({ url: 'waelio.org' })

    const getGunValue = (value: string) => {
      site.get(value).then((v) => {
        return v
      })
    }
    const url = getGunValue('url')
    // eslint-disable-next-line no-console
    console.log('%cindex.vue line:20 url', 'color: #007acc;', url)
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
