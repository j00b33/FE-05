import { gql, useMutation } from "@apollo/client";
import * as V from "./styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiTwotoneExperiment } from "react-icons/ai";

export default function ViewedPage() {
  const [viewed, setViewed] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewed = JSON.parse(localStorage.getItem("today i viewed" || "[]"));
      console.log("=====viewed Check=====");
      setViewed(viewed);
    }
  }, []);

  console.log(viewed);

  const router = useRouter();

  const onClickDetail = (event) => {
    router.push(`/01-01-market/${event.currentTarget.id}`);
  };

  return (
    <V.Wrapper>
      <V.Title>Recently Viewed</V.Title>
      <V.ProductWrapper>
        {viewed &&
          viewed.map((el) => (
            <V.Box key={el._id}>
              <V.ProductImage
                src={`https://storage.googleapis.com/${el?.images?.[0]}`}
                onError={(e) => (e.currentTarget.src = "/empty.png")}
              />
              <V.Product id={el._id} onClick={onClickDetail}>
                {el.name.length > 7 ? `${el?.name.slice(0, 8)}...` : el?.name}
              </V.Product>
            </V.Box>
          ))}
      </V.ProductWrapper>
    </V.Wrapper>
  );
}
