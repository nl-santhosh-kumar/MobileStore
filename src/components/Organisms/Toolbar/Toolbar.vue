<template>
    <div class="container">
        <div class="filter">
          <span v-for="option in options" :value="option"
          :key="option">
              <custom-filter
              :filter-options="option.options"
              :title="option.title"
              :attribute="option.attribute"
              />
          </span>
        </div>
    </div>
</template>
<script>
import CustomFilter from '@/components/Molecules/CustomFilter/CustomFilter.vue'

export default {
  name: 'ToolBar',
  props: {
    options: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    CustomFilter
  },
  methods: {
    /**
         * A function to send selected filter option with source to parent component
         */
    onFilterClick: function (option, attribute) {
      this.$parent.onFilterClick(option, attribute)
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}
.filter {
  background-color: #ffff;
  padding-left: 10px;
  width: 100%;
  border-radius: 10px;
}
</style>
