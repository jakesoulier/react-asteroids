import styled from 'styled-components';

export const Ship = styled.div`
    width: 20;
    height: 20;
    position: absolute;
    border-width: 50px 18px 0;
    border-style: solid;
    border-color: red transparent;
`






// class Rock {
//     constructor(x, y, dx, dy, size) {
//       this.x = x;
//       this.y = y;
//       this.dx = dx;
//       this.dy = dy;
//       this.size = size;
//     }
  
//     draw(ctx) {
//       // Draw a circle representing the rock
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       ctx.stroke();
//     }
  
//     update() {
//       this.x += this.dx;
//       this.y += this.dy;
  
//       // Handle rock going off screen
//       if (this.x > screenWidth + this.size) {
//         this.x = 0 - this.size;
//       } else if (this.x < 0 - this.size) {
//         this.x = screenWidth + this.size;
//       }
  
//       if (this.y > screenHeight + this.size) {
//         this.y = 0 - this.size;
//       } else if (this.y < 0 - this.size) {
//         this.y = screenHeight + this.size;
//       }
//     }
//   }
  