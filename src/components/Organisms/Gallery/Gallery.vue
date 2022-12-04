<template>
    <div class="main">
        <div class="wrapper">
            <div class="container"  v-for="(phoneInformation) in phoneFeed" :key="phoneInformation.id">
                <div class="content" @click="onShowSelection(phoneInformation.id)">
                    <img :src="`${phoneInformation.image || imageUrl}`" />
                    <div class="manufacturer">
                       {{ phoneInformation.manufacturer }}
                    </div>
                    <div class="name">
                        {{ phoneInformation.name }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="phoneFeed.length === 0">
            <no-phone-feed-available />
        </div>
    </div>
</template>
<script>

import NoPhoneFeedAvailable from '@/components/Molecules/NoPhoneFeedAvailable/NoPhoneFeedAvailable.vue'

export default {
  name: 'Gallery',
  components: {
    NoPhoneFeedAvailable
  },
  props: {
    phoneFeed: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    /**
     * A function to route the user to show route by passing id to the url
     */
    onShowSelection (id) {
      this.$router.push(`/information/${id}`)
    }
  },
  data: function () {
    return {
      imageUrl: 'https://www.kpn.com/shop/cdn/products/_/product_6243627_main.webp'
    }
  }
}
</script>

<style scoped>

.container {
    float: left;
    width: 30%;
    cursor: pointer;
    margin: 10px;
    border-radius: 25px;
    background: #ffff;
}

.wrapper:after {
    content: "";
    display: table;
    clear: both;
}

.content {
    padding-top: 10px;;
    text-align: center;
}

img {
    max-width: 200px;
    max-height: 200px;
}

.heading-wrapper {
    margin-top: 20px;
    margin-left: 40px;
    font-weight: bold;
    font-size: 14px;
}

.manufacturer {
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    text-align: left;
    padding-left: 15px;
}

.name {
    font-size: 21px;
    line-height: 25px;;
    text-align: left;
    max-width: 250px;
    padding: 15px;
    font-weight: bold;
}

@media screen and (max-width: 961px) {
    .wrapper {
        margin: 0 auto;
    }
    .container {
        float: left;
        width: 30%;
        cursor: pointer;
    }
}

@media screen and (max-width: 641px) {
    .wrapper {
        margin: 0 auto;
    }
    .container {
        float: left;
        width: 43%;
        cursor: pointer;
    }
}
</style>
