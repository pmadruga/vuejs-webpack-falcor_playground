<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
  	var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json') });
  	model.get("greeting").then(function(response) {
          console.log(response.json.greeting);
        });
    return {
      msg: 'This is the app main component.'
    }
  }
}
</script>