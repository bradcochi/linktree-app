import { useEffect } from "react";
import {
  MessageCircleHeart,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function IPhoneGraphic() {
  useEffect(() => {
    var viewport = document.querySelector(".viewportWrapper");

    window.addEventListener("mousemove", (event) => {
      const innerWidth = event.view.innerWidth;
      const halfInnerWidth = innerWidth / 2;
      const clientX = event.clientX;
      const widthDifference = Math.abs(clientX - halfInnerWidth);
      const widthDifferencePercentage =
        (widthDifference / halfInnerWidth) * 100;
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

      viewport.style.setProperty("--rotateY", rotateY);
      viewport.style.setProperty("--rotateX", rotateX);
    });
  }, []);

  return (
    <div className="viewportWrapper">
      <div className="viewport">
        <div className="avatar"></div>

        <div className="links">
          <button>Autumn Collection</button>
          <button>Latest additions</button>
          <button>Podcast</button>
        </div>

        <div className="widget"></div>

        <div className="icons">
          <div className="icon">
            <Instagram />
          </div>
          <div className="icon">
            <Facebook />
          </div>
          <div className="icon">
            <Linkedin />
          </div>
        </div>

        <div className="item"></div>
      </div>
    </div>
  );
}
