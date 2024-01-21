export default function IPhoneGraphic() {
  var body = document.querySelector("body");

  window.addEventListener("mousemove", (event) => {
    const innerWidth = event.view.innerWidth;
    const halfInnerWidth = innerWidth / 2;
    const clientX = event.clientX;
    const widthDifference = Math.abs(clientX - halfInnerWidth);
    const widthDifferencePercentage = (widthDifference / halfInnerWidth) * 100;
    let rotateY = (widthDifferencePercentage / 100) * 30;
    if (clientX < halfInnerWidth) rotateY = rotateY * -1;

    const innerHeight = event.view.innerHeight;
    const halfInnerHeight = innerHeight / 2;
    const clientY = event.clientY;
    const heightDifference = Math.abs(clientY - halfInnerHeight);
    const heightDifferencePercentage =
      (heightDifference / halfInnerWidth) * 100;
    let rotateX = (heightDifferencePercentage / 100) * 30;
    if (clientY > halfInnerHeight) rotateX = rotateX * -1;

    body.style.setProperty("--rotateY", rotateY);
    body.style.setProperty("--rotateX", rotateX);
  });

  return (
    <div class="viewport">
      <div class="avatar"></div>

      <div class="links">
        <button>Autumn Collection</button>
        <button>Latest additions</button>
        <button>Podcast</button>
      </div>

      <div class="widget"></div>

      <div class="icons">
        <div class="icon">P</div>
        <div class="icon">S</div>
        <div class="icon">I</div>
      </div>

      <div class="item"></div>
    </div>
  );
}
