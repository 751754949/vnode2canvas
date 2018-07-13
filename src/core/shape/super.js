/**
 * @author muwoo
 * Date: 2018/7/11
 */
const defaultStyle = {
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
}
export class Super {
  constructor(drawStyle) {
    this.drawStyle = Object.assign({}, defaultStyle, drawStyle)
    this.startX = this.drawStyle.left
    this.startY = this.drawStyle.top
    this.width = this.drawStyle.width
    this.height = this.drawStyle.height
  }

  isInPath(point) {
    if (
      this.render &&
      point.layerX >= this.startX &&
      point.layerX <= this.width + this.startX &&
      point.layerY >= this.startY &&
      point.layerY <= this.height + this.startY) {
      return true
    }
    return false
  }
}
