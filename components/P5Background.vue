<template>
  <div ref="p5Container" class="p5-background-canvas"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const p5Container = ref<HTMLElement | null>(null);
let p5Instance: any | null = null;

const sketch = (p: any) => {
  const points: { x: number; y: number; vx: number; vy: number; }[] = [];

  // パフォーマンス調整パラメータ
  const numPoints = 50;
  const maxDist = 120;
  const pointSize = 3;
  const speed = 0.4;

  p.setup = () => {
    if (p5Container.value) {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent(p5Container.value);

      // 右クリックデフォルト動作キャンセル
      canvas.elt.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();
      });

      // フレームレート制限
      p.frameRate(30); 

      p.background(0);

      // 点の初期配置
      points.length = 0;
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
    // 残像効果のある背景
    p.background(0, 0, 20, 70);

    p.noFill();

    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];

      // 点の移動と画面端での跳ね返り
      p1.x += p1.vx;
      p1.y += p1.vy;
      if (p1.x < 0 || p1.x > p.width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > p.height) p1.vy *= -1;

      // 点を描画
      p.stroke(255);
      p.strokeWeight(pointSize);
      p.point(p1.x, p1.y);

      // 他の点との間に線を描画
      for (let j = i + 1; j < points.length; j++) {
        const p2 = points[j];
        const distance = p.dist(p1.x, p1.y, p2.x, p2.y);

        if (distance < maxDist) {
          // 距離に応じて線の色や太さを調整
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