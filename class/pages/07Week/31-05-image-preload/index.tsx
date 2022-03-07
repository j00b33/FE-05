import { useEffect, useRef, useState } from "react";

export default function ImagePreLoadPage() {
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>(); //태그 자체를 state에 넣은거
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //이미지 먼저 읽어오기
    const img = new Image();
    img.src =
      "https://images-ext-2.discordapp.net/external/SQ_2-vEZIe399Iq5QbV6aiJrQhkUetiDPZ46_941NPc/https/blog.kakaocdn.net/dn/elNDZe/btqNcF91238/jewKNblkVB4n798mGFLqzK/img.jpg";
    img.onload = () => {
      //after the image downlaoding is done, image tag is put to state
      setImgTag(img);
    };
  }, []);

  const onClickImagePreLoad = () => {
    if (imgTag) {
      divRef.current?.appendChild(imgTag);
    }
  };

  const onClickImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      ============= Image Pre-Load =============
      <br />
      <div ref={divRef}></div>
      <br />
      <button onClick={onClickImagePreLoad}>Pre-Load</button>
      <br />
      ============= Image Normal-Load =============
      <br />
      {loaded && (
        <img src="https://images-ext-2.discordapp.net/external/SQ_2-vEZIe399Iq5QbV6aiJrQhkUetiDPZ46_941NPc/https/blog.kakaocdn.net/dn/elNDZe/btqNcF91238/jewKNblkVB4n798mGFLqzK/img.jpg" />
      )}
      <br />
      <button onClick={onClickImageLoad}>Normal Load</button>
    </div>
  );
}
