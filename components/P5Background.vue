<template>
    <div ref="p5Container" class="p5-background-canvas"></div>
  </template>
  
  <script setup lang="ts">
import process from 'process';
import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const p5Container = ref<HTMLElement | null>(null);
  let p5Instance: any | null = null;
  
  const sketch = (p: any) => {
    const points: { x: number; y: number; vx: number; vy: number; }[] = [];
    const numPoints = 100; // 点の数
    const maxDist = 150;   // 線を引く最大距離
    const pointSize = 3;   // 点のサイズ
    const speed = 0.5;     // 点の動きの速さ
  
    p.setup = () => {
      if (p5Container.value) {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(p5Container.value);
        p.background(0); // 黒背景
  
        // 点をランダムに初期配置
        for (let i = 0; i < numPoints; i++) {
          points.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-speed, speed), // 速度（x方向）
            vy: p.random(-speed, speed), // 速度（y方向）
          });
        }
      }
    };
  
    p.draw = () => {
      p.background(0, 0, 20, 50); // 非常に暗い青の背景に、少し残像を残す（アルファ値で調整）
  
      p.noFill(); // 点は塗りつぶさない
  
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
  
        // 点の移動
        p1.x += p1.vx;
        p1.y += p1.vy;
  
        // 画面端での跳ね返り
        if (p1.x < 0 || p1.x > p.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > p.height) p1.vy *= -1;
  
        // 点を描画
        p.stroke(255); // 点の色は白
        p.strokeWeight(pointSize);
        p.point(p1.x, p1.y);
  
        // 他の点との間に線を描画
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const distance = p.dist(p1.x, p1.y, p2.x, p2.y);
  
          if (distance < maxDist) {
            // 距離に応じて線の色や太さを調整
            const alpha = p.map(distance, 0, maxDist, 200, 0); // 近いほど不透明
            const thickness = p.map(distance, 0, maxDist, 2, 0.5); // 近いほど太い
            
            p.stroke(60, 150, 255, alpha); // 明るい青で透明度付き
            p.strokeWeight(thickness);
            p.line(p1.x, p1.y, p2.x, p2.y);
          }
        }
      }
    };
  
    p.windowResized = () => {
      if (p5Container.value) {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        // ウィンドウサイズ変更時に点も再配置したい場合はここでpoints配列をクリアして再初期化する
        // 例: points.length = 0; p.setup();
      }
    };
  };
  
  onMounted(async () => {
    if (process) {
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