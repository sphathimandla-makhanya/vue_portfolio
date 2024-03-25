<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <h1>{{ $store.state.about.heading }}</h1>
        <div class="col m-5">
          <ul class="list-group list-group-item-dark list-group-flush">
            <li class="list-group-item list-group-item-dark">S'phathimandla Makhanya</li>
            <li class="list-group-item ">Gender: Male</li>
            <li class="list-group-item list-group-item-dark">Nationality: African</li>
            <li class="list-group-item">Driver's license: C1/10</li>
            <li class="list-group-item list-group-item-dark">Languages: English, Isizulu and IsiXhosa</li>
            <li class="list-group-item">Strong communication and interpersonal skills</li>
            <li class="list-group-item list-group-item-dark">MS Office (Access, Excel, Power point, Word, Outlook, Visio)</li>
            <li class="list-group-item">Skills: ArcMap, ArcGIS Pro,Google Earth Pro and GeoMedia software</li>
          </ul><br>
        </div>
        <div class="col m-5">
          <img id="image" :src="$store.state.about.img" class="mb-3">
          <p>{{ $store.state.about.description}}</p>
          <p>{{ $store.state.about.hobbies }}</p><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
computed: {
  fetchData(){
    this.$store.dispatch('fetchData')
  }
},
mounted(){
  this.fetchData
}
}
</script>

<style>
#image{
  height: 250px;
  width: 250px;
  border-radius:5px;
}
ul li{
  height: 50px;
}

.about{
  background-color: cadetblue;
}
</style>