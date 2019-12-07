<script>
import image from "../../assets/first-image.jpg";

export default {
  name: "Product"
};
</script>

<template>
  <div>
    <div id="product">
      <img class="image" src="@/assets/first-image.jpg" alt="Image product" height="1000" />
      <p class="first-paragraph">Én samlet boks med alle de spil du skal bruge for at få en sjov aften.</p>
    </div>
    <div id="who">
      <img class="image" src="@/assets/second-image1.jpg" alt="Image in-action" height="800" />
      <p class="title">HVEM ER VI?</p>
      <p class="second-paragraph">
        Vi er 7 studerende som læser Innovation & Entrepreneurship på Cph Business
        Idéen til boks konceptet opstod da vi sad til et socialt arrangement og manglede underholdning.
        Vi besluttede derfor at lave en boks med underholdning, som samler spil der normalt skal købes forskellige steder og i bestemte butikker.
        Kernen i konceptet var at det skulle være let tilgængeligt.
        Derudover har vi selv lavet alt hvad man skal bruge til et spil musikbango
      </p>
    </div>
    <div id="content">
      <img class="image" src="@/assets/third-image.jpg" alt="Image content" height="800" />
      <div>
        <p class="content">Beerpong</p>
        <img class="content" src="@/assets/beerpong.png" height="80" width="80"/>
        <p class="content">Kortspil</p>
        <img class="content" src="@/assets/card.png" height="80" width="80"/>
        <p class="content">Terninger</p>
        <img class="content" src="@/assets/dice.png" height="80" width="80"/>
        <p class="content">Musik Bingo</p>
        <img class="content" src="@/assets/music.png" height="80" width="80"/>
      </div>
    </div>

    <div class="link-container">
      <router-link class="link" v-bind:to="'/shop'" :key="1">Køb nu!</router-link>
    </div>
  </div>
</template>

<style scoped>
.image {
  max-height: 20%;
  width: 100%;
}

.link {
  font-size: 60px;
  text-decoration: none;
  color: black;
}

.content {
  clear: both;
  display: inline-block;
  overflow: hidden;
  padding: 3%;
  font-size: 30px;
}

.first-paragraph {
  margin-top: 200px;
  font-style: italic;
  font-size: 40px;
  margin-bottom: 200px;
}

.title {
  margin-top: 100px;
  font-size: 50px;
}

.second-paragraph {
  font-size: 30px;
  margin-bottom: 200px;
  font-style: italic;
}

.content {
  margin-top: 200px;
  margin-bottom: 200px;
}

</style>