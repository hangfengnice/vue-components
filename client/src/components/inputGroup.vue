<template>
  <div class="input_group">
    <label :for="name">{{label}}</label>
    <input
      :value="value"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input',$event.target.value)"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    label: String
  }
};
</script>

<style scoped>
.input_group {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px 0;
  line-height: 60px;
}
.input_group label {
  display: inline-block;
  width: 30%;
  padding-left: 20px;
  font-size: 16px;
  box-sizing: border-box;
}
.input_group input {
  display: inline-block;
  width: 65%;
  font-size: 16px;
  border: none;
  outline: noen;
  box-sizing: border-box;
  padding-left: 5px;



}
</style>
