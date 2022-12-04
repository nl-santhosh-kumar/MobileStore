<template>
    <main class="main">
        <div class="phone_card" id="bright">
            <div class="info_section">
                <div class="phone_header">
                    <img class="locandina" :src="`${image}`" >
                    <h1>{{ model }}</h1>
                    <h4>{{ manufacturer }}</h4>
                    <span class="release_date">Released On {{ releasDate }}</span>
                </div>
            </div>
            <div class="blur_back" :style="{ 'background-image': 'url(' + image + ')' }"/>
        </div>
    </main>
</template>

<script>

export default {
  name: 'PhoneInformation',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true

    },
    releasDate: {
      type: String,
      required: true

    },
    model: {
      type: Number,
      required: true

    },
    manufacturer: {
      type: String,
      required: true
    }
  },
  filters: {
    formatGenre: function (inputArray = []) {
      return inputArray.join()
    }
  }
}
</script>
<style scoped>
.link {
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}

img {
  max-width: 600px;
  max-height: 600px;
}

.phone_card {
  position: relative;
  display: block;
  width: 800px;
  height: 100%;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}

.phone_card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}

.phone_card .info_section {
  position: relative;
  width: 100%;
  height: 600px;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}

.phone_card .info_section .phone_header {
  position: relative;
  padding: 25px;
  height: 100%;
}

.phone_card .info_section .phone_header h1 {
  color: black;
  font-weight: 400;
}

.phone_card .info_section .phone_header h4 {
  color: #555;
  font-weight: 400;
}

.phone_card .info_section .phone_header .release_date {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.phone_card .info_section .phone_header .type {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}

.phone_card .info_section .phone_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}

.phone_card .info_section .movie_desc {
  padding: 25px;
  height: 50%;
}

.phone_card .info_section .movie_desc .text {
  color: #545454;
}

.phone_card .info_section .movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}

.phone_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}

.phone_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}

.phone_card .info_section .movie_social ul li:hover {
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.7);
}

.phone_card .info_section .movie_social ul li i {
  font-size: 19px;
  cursor: pointer;
}

.phone_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: contain;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .phone_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}

@media screen and (max-width: 768px) {
  .phone_card {
    width: 95%;
    margin: 0 auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .phone_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>
