<template>
  <div ref="p5Container" class="p5-background-canvas"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const p5Container = ref<HTMLElement | null>(null);
let p5Instance: any | null = null;

const sketch = (p: any) => {
  const points: { x: number; y: number; vx: number; vy: number; }[] = [];
  const numPoints = 100;
  const maxDist = 150;
  const pointSize = 3;
  const speed = 0.5;

  p.setup = () => {
    if (p5Container.value) {
      // キャンバスを作成し、親要素に設定
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent(p5Container.value);

      // ★ここを追加: キャンバス要素に対して右クリックイベントをリッスンし、デフォルト動作をキャンセルする
      canvas.elt.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault(); // デフォルトのコンテキストメニュー表示を抑制
      });
      // canvas.elt は p5.js のキャンバス要素（HTMLCanvasElement）にアクセスするためのプロパティ

      p.background(0);

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: p.random(p.width),
          y: p.random(p.height),
          vx: p.random(-speed, speed),
          vy: p.random(-speed, speed),
        });
      }
    }
  };

  p.draw = () => {
    p.background(0, 0, 20, 50);

    p.noFill();

    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];

      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0 || p1.x > p.width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > p.height) p1.vy *= -1;

      p.stroke(255);
      p.strokeWeight(pointSize);
      p.point(p1.x, p1.y);

      for (let j = i + 1; j < points.length; j++) {
        const p2 = points[j];
        const distance = p.dist(p1.x, p1.y, p2.x, p2.y);

        if (distance < maxDist) {
          const alpha = p.map(distance, 0, maxDist, 200, 0);
          const thickness = p.map(distance, 0, maxDist, 2, 0.5);
          
          p.stroke(60, 150, 255, alpha);
          p.strokeWeight(thickness);
          p.line(p1.x, p1.y, p2.x, p2.y);
        }
      }
    }
  };

  p.windowResized = () => {
    if (p5Container.value) {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
  };
};

onMounted(async () => {
  if (process.client) {
    const P5 = (await import('p5')).default;
    p5Instance = new P5(sketch);
  }
});

onBeforeUnmount(() => {
  if (p5Instance) {
    p5Instance.remove();
  }
});
</script>

<style scoped>
.p5-background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>