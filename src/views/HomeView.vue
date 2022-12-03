  <template>
  <div class="home">
    <div v-if="phoneFeed.length>0">
    <gallery :phoneFeed="phoneFeed"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Gallery from '@/components/Organisms/Gallery/Gallery.vue'
import { getPhoneFeed } from '@/services/PhoneFeedService'

export default defineComponent({
  name: 'HomeView',
  components: {
    Gallery
  },
  data: function () {
    return {
      phoneFeed: []
    }
  },
  methods: {
    loadPhoneFeed: function () {
      getPhoneFeed().then((phoneFeed) => {
        const { products = [] } = phoneFeed
        this.phoneFeed = products
      }).catch((error) => {
        console.log('error', error)
      })
    }
  },
  mounted: function () {
    this.loadPhoneFeed()
  }
})
</script>
