<template>
  <div class="toggle-switch">
    <input type="checkbox" v-model="toggleValue" @change="updateValue" />
    <label @click="toggleSwitch()"></label>
  </div>
</template>

<script>
export default {
  name: "toggleSwitch",
  data() {
    return {
      toggleValue: true,
    };
  },
  methods: {
    toggleSwitch() {
      return (this.toggleValue = !this.toggleValue);
    },
    updateValue() {
      this.$emit("input", this.toggleValue);
    },
  },
};
</script>

<style>
.toggle-switch {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
}

input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 34px;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.2s;
}

input[type="checkbox"]:checked + label {
  background-color: #316fee;
}

label:after {
  content: "";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}

input[type="checkbox"]:checked + label:after {
  left: calc(100% - 4px);
  transform: translateX(-100%);
}
</style>
