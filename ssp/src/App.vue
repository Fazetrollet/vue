<template>
  <router-view />
</template>

<script setup></script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2em;
}
.title {
  font-size: 2em;
  margin-bottom: 1.5em;
}
.buttons {
  display: flex;
  gap: 1em;
  margin-top: 1.5em;
}
button {
  padding: 0.6em 1.2em;
  font-size: 1em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #45a049;
}
</style>
