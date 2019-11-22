<template>
  <div class="add-to" >
    <button
      class="add-to-btn"
      @click="showSystemPWAAlert"
      v-if="isShowAlert"  
    >Add to home screen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
      isShowAlert: false
    };
  },
  mounted() {

    window.addEventListener("beforeinstallprompt", e => {
      console.log("beforeinstallprompt=>", e);
      e.preventDefault(); // тормозим  авто-отображение в хроме 67-
      this.deferredPrompt = e; // сохраняем event, который запустим позже
      this.isShowAlert = true; // <-- новое (!) - отобразим юзеру запрос на установку
    });
 
  },
  methods: {
    showSystemPWAAlert() {
      this.isShowAlert = false;
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted")
          console.log("accepted A2HS prompt");
        else console.log("dismissed a2hs");
        this.deferredPrompt = null;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* Add some hover effects to button */

.add-to-btn {
  background-color: #555;
  color: white;
  padding: 6px 5px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 200px;
  cursor: pointer;
  transition: .1s;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  &:active {
    opacity: .3;
    transform: scale(.9);
  }
}
</style>