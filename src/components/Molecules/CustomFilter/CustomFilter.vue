<template>
      <div class="dropdown">
        <button class="dropbtn">{{title}}</button>
          <div class="dropdown-content" >
           <span v-for="option in filterOptions"
                :value="option"
                :key="option">{{ option }} </span>
        </div>
      </div>
</template>
<script>

export default {
  name: 'CustomFilter',
  props: {
    filterOptions: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text: null
    }
  },
  methods: {
    /**
         * A function to pass the selected filter option(genre, or rating) to the parent component
         */
    onFilterOptionSection: function (option) {
      this.$parent.onGenreFilterClick(option, this.title)
      // Rating is number, to convert it to string to match the prop definition
      this.text = option.toString()
    }
  }
}
</script>
<style scoped>
.filter {
    margin-left: 10px;
}

.dropbtn {
  color: black;
  background: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  z-index: 1;
  border-radius: 10px;
  text-align: left;
}

.dropdown-content span {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content span:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
