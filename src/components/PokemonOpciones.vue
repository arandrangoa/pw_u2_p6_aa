<template>
  <div class="opciones-container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style>

ul{
  list-style-type:none ;
}

li{
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 250px;
  background-color: white;
  cursor: pointer;
}

li:hover{
background-color: rgba(0, 0, 0, 0.05);
}

.opciones-container{
  display: flex;
  justify-content: center;
}

</style>