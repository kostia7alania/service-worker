<template>
  <div class="hello">
    <h1> &Sigma; {{ msg }} &sum; </h1>
    
    <map name="continents_map">
      <area shape="circle" coords="70, 70, 10" href="#north_america" />
      <area shape="circle" coords="133, 185, 10" href="#south_america" />
      <area shape="circle" coords="270, 137, 10" href="#africa" />
      <area shape="circle" coords="292, 44, 10" href="#europe" />
      <area shape="circle" coords="469, 201, 10" href="#australia" />
      <area shape="circle" coords="374, 65, 10" href="#asia" />
      <area shape="circle" coords="340, 267, 10" href="#antartica" />
    </map>

<input type="text" list="text_editors">
<datalist id="text_editors">
    <option value="Atom"></option>
    <option value="Notepad ++"></option>
    <option value="Sublime Text"></option>
    <option value="Wordpad"></option>
</datalist> 
  
    <figure style="text-align:center;">
      <img usemap="#continents_map" src=https://bit.ly/2bgFrvL width="600px" />
      <figcaption>&#10148; Click on the dots in the image to go to a continent section</figcaption>
    </figure>
 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  font-family: "bookman old style";
}
:target {
  color: lightyellow;
  background: indianred;
}
h3,
h1 {
  color: indianred;
}
img {
  border: 3px dashed indianred;
}
body {
  counter-reset: srl;
}
h3::before {
  counter-increment: srl;
  content: counter(srl) ". ";
}
</style>
