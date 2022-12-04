<template>
  <div class="main">
    <notification></notification>
    <br >
    <br >
    <heading title="Choose from..." />
    <br >
      <tool-bar :options="toolBarOptions"/>
    <br >
    <div v-if="phoneFeed.length>0">
    <gallery :phoneFeed="phoneFeed"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Gallery from '@/components/Organisms/Gallery/Gallery.vue'
import ToolBar from '@/components/Organisms/Toolbar/Toolbar.vue'
import Heading from '@/components/Atoms/Heading/Heading.vue'
import Notification from '@/components/Atoms/Notification/Notification.vue'
import { getPhoneFeed } from '@/services/PhoneFeedService'

export default defineComponent({
  name: 'HomeView',
  components: {
    Gallery,
    ToolBar,
    Heading,
    Notification
  },
  data: function () {
    return {
      phoneFeed: [],
      allPhoneFeed: [],
      toolBarOptions: [{}]
    }
  },
  methods: {
    onFilterClick: function (value = '', attribute = '') {
      this.phoneFeed = this.allPhoneFeed.filter((feed) => feed[attribute] === value)
    },
    loadPhoneFeed: function () {
      getPhoneFeed().then((phoneFeed) => {
        const { products = [] } = phoneFeed
        this.phoneFeed = products
        this.allPhoneFeed = products
        // load filter options
        this.loadBrandOptions(products)
        // load operating system
        this.loadOperatingSystemOption(products)

        // load refurb
        this.toolBarOptions.push({
          title: 'Refurbished',
          attribute: 'refurbished',
          options: ['Yes', 'No']
        })
      }).catch((error) => {
        console.log('error', error)
      })
    },
    loadBrandOptions: function (products = []) {
      const options: string[] = []
      products.forEach((product: any) => {
        options.push(product.manufacturer)
      })
      this.toolBarOptions.push({
        title: 'Brand',
        attribute: 'manufacturer',
        options: [...new Set(options)]
      })
    },
    loadOperatingSystemOption: function (products = []) {
      const options: string[] = []
      products.forEach((product: any) => {
        options.push(product.operating_system)
      })
      this.toolBarOptions.push({
        title: 'OS',
        attribute: 'operating_system',
        options: [...new Set(options)]
      })
    }
  },
  mounted: function () {
    this.loadPhoneFeed()
  }
})
</script>
<style scoped>
.main {
    max-width: 1000px;
    margin: auto;
    align-content: center;
}
</style>
