<template>
  <section ref="section" class="full-section" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <div class="overlay"></div>
    <div class="content" :class="{ visible: isVisible }">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "FullSection",
  props: {
    bg: String
  },
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
      },
      {
        threshold: 0.5 // عندما يظهر نصف القسم يصبح visible
      }
    );
    observer.observe(this.$refs.section);
  }
};
</script>

<style scoped>
.full-section {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  top: 0;
  overflow:hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1;
}

.content {
  position: relative;
  color: white;
  text-align: center;
  padding: 20px;
  max-width: 700px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
  width: 100%;
  z-index: 5;
}

.content.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
