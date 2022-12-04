<template>
    <div class="fill">
        <breadcrumb/>
        <div class="main">
            <phone-information
                :name="phone.name"
                :image="phone.image"
                :manufacturer="phone.manufacturer"
                :model="phone.model"
                :releasDate="phone.releasDate"
            />
        </div>
    </div>

</template>
<script>
import { getPhoneFeed } from '@/services/PhoneFeedService'
import PhoneInformation from '@/components/Organisms/PhoneInformation.vue/PhoneInformation.vue'
import Breadcrumb from '@/components/Molecules/Breadcrumb/Breadcrumb.vue'
export default {
  name: 'Information',
  components: {
    PhoneInformation,
    Breadcrumb
  },
  mounted: function () {
    const id = this.$route.params.id

    if (Number(id) > 0) {
      this.getPhoneInformation(id)
    } else {
      this.$router.push('/')
    }
  },
  data () {
    return {
      phone: {
        name: '',
        manufacturer: '',
        image: '',
        releasDate: '',
        operatingSystem: ''
      }
    }
  },
  methods: {
    getPhoneInformation: function (id = 0) {
      // get the query movie id from the query param and load the movie information
      getPhoneFeed().then((phoneFeed) => {
        const { products = [] } = phoneFeed
        const specicifPhone = products.filter((phone) => {
          return phone.id === Number(id)
        })[0]
        /* eslint-disable camelcase */
        const { name, manufacturer, model, operartion_system, image, release_date } = specicifPhone
        /* eslint-disable camelcase */
        this.phone = {
          name,
          manufacturer,
          model,
          operatingSystem: operartion_system,
          image,
          releasDate: release_date

        }
      }).catch((err) => console.log(err))
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
}
.main {
    max-width: 1000px;
  margin: auto;
}
img {
  width: 300px;
}

.left-container {
  width: 150px;
}

.additional-information {
  color: red;
}

.right-container {
  flex: 1;
}

.fill {
    width: 100%;
}
</style>
