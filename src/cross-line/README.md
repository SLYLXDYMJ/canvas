# 交叉的线（cross-line）

## 使用
```javascript
import { crossLine } from 'jason-canvas';

crossLine({
  // canvas 元素（string，dom）
  canvasEl: '',
  // canvas 背景颜色
  bgColor: '#000',
  // 圆颜色
  circleColor: '#fff',
  // 线颜色
  lineColor: '#fff',
  // 圆透明度
  circleOpacity: 1.0,
  // 线透明度
  lineOpacity: 0.5,
  // 生成的线的数量
  lineNum: 15
})
```