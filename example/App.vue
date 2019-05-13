<template>
  <main class="app markdown-body">
    <!-- 交叉的线 -->
    <div class="row space-10 mb-4">
      <div class="col-6">
        <canvas id="cross-line"/>
      </div>
      <div class="col-6">
        <cross-line-md/>
      </div>
    </div>
    <!-- 粒子效果 -->
    <div class="row space-10 mb-4">
      <div class="col-6">
        <div id="particles"></div>
      </div>
      <div class="col-6">
        <particles-md/>
      </div>
    </div>
  </main>
</template>

<script>
  import '../node_modules/jason-css/dist/normal.css';
  import '../node_modules/github-markdown-css/github-markdown.css';
  import crossLine from '../src/cross-line';
  import CrossLineMd from '../src/cross-line/README.md';
  import ParticlesMd from '../src/particles/README.md';
  import 'particles.js';

  let methods = {
    crossLine () {
      crossLine({
        canvasEl: '#cross-line',
        lineNum: 14
      });
    },
    particlesJS () {
      particlesJS('particles', {
        particles: {
          size: {
            value: 3
          }
        }
      });
    }
  };

  export default {
    name: 'app',
    methods,
    mounted () {
      for (let key in methods) {
        this[ key ]();
      }
    },
    components: {
      CrossLineMd,
      ParticlesMd
    }
  };
</script>

<style lang="scss">
  @import "~jason-css/src/normal";

  .app {
    padding: 50px;
  }

  canvas, #particles {
    display: block;
    width: 100%;
    height: 500px;
  }

  #particles {
    background-color: black;
  }
</style>