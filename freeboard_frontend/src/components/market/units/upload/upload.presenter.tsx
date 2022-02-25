import Button from "../../../commons/createProduct/button";
import * as C from "./upload.styles";
import SmallInput from "../../../commons/createProduct/input/02";
import MidInput from "../../../commons/createProduct/input/03";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

declare const window: typeof globalThis & {
  kakao: any; //뭐가 더 들어오는지 모르기 때문에 any 사용
};

export default function CreateProductUIPage(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=49d3c5429e18c3d510e928134b830407&libraries=services&autoload=false ";
    //`?` --> 객체에 두개를 넣어서 문자열 형태로 넣어서 보내는거
    document.head.appendChild(script);

    script.onload = () => {
      console.log(props.data);
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            props.isEdit
              ? props.data?.fetchUseditem.useditemAddress.lng
              : 33.450701,
            props.isEdit
              ? props.data?.fetchUseditem.useditemAddress.lat
              : 126.570667
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도 생성
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        const geocoder = new window.kakao.maps.services.Geocoder();

        //주소로 좌표 검색
        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            props.setLat(coords.La);
            props.setLng(coords.Ma);

            // 결과값으로 받은 위치를 마커로 표시
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동
            map.setCenter(coords);
          }
        });
      });
    };
  }, [props.address, props.data]);
  return (
    <C.Wrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <C.Header>
          {props.isEdit ? "Edit Your Product" : "Upload Your Product"}
        </C.Header>

        <C.SmallInputWrapper>
          <C.SectionWrapper>
            <C.Label>Product</C.Label>
            <SmallInput
              type="text"
              register={props.register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <C.Error>{props.formState.errors.name?.message}</C.Error>
          </C.SectionWrapper>

          <C.SectionWrapper>
            <C.Label>Price</C.Label>
            <SmallInput
              type="text"
              register={props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <C.Error>{props.formState.errors.price?.message}</C.Error>
          </C.SectionWrapper>
        </C.SmallInputWrapper>

        <C.SectionWrapper>
          <C.Label>Short Description</C.Label>
          <MidInput
            type="text"
            register={props.register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <C.Error>{props.formState.errors.remarks?.message}</C.Error>
        </C.SectionWrapper>

        <C.LargeSectionWrapper>
          <C.Label>Description</C.Label>
          <C.ReactQuill>
            <ReactQuill
              onChange={props.handleChange}
              defaultValue={props.data?.fetchUseditem.contents}
              style={{ height: "180px", width: "996px" }}
            />
          </C.ReactQuill>

          <C.Error>{props.formState.errors.contents?.message}</C.Error>
        </C.LargeSectionWrapper>

        {props.isModalVisible && (
          <Modal
            title="Address"
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.onCompleteDaumPostCode} />
          </Modal>
        )}
        <C.AddressWrapper>
          <C.Label>Address</C.Label>
          <C.AddressMain>
            <div id="map" style={{ width: "450px", height: "300px" }} />

            <C.AddressRightWrapper>
              <C.AddressBtn onClick={props.showModal}>
                Search Address
              </C.AddressBtn>
              <C.AddressInput
                readOnly={true}
                placeholder="Address"
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress.address
                    ? props.data?.fetchUseditem.useditemAddress.address
                    : props.address
                }
              ></C.AddressInput>
              <C.GPS>
                <C.GPSInput
                  readOnly={true}
                  placeholder="(lat)"
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.lat
                      ? props.data?.fetchUseditem.useditemAddress.lat
                      : props.lat
                  }
                ></C.GPSInput>
                <C.GPSInput
                  readOnly={true}
                  placeholder="(lng)"
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.lng
                      ? props.data?.fetchUseditem.useditemAddress?.lng
                      : props.lng
                  }
                ></C.GPSInput>
              </C.GPS>

              <C.AddressInput
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchUseditem?.useditemAddress.addressDetail
                }
              ></C.AddressInput>
            </C.AddressRightWrapper>
          </C.AddressMain>
        </C.AddressWrapper>

        <C.ImageWrapper>
          <C.Label>Add Photo</C.Label>
          <C.AddImage onClick={props.onClickImage}>
            <C.BoxWord>+</C.BoxWord>
            <C.SmallImage
              src={
                props.data?.fetchUseditem.images
                  ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
                  : `https://storage.googleapis.com/${props.image}`
              }
              // defaultValue={props.data?.fetchUseditem.images}
              onError={(e) => (e.currentTarget.src = "/empty.png")}
            />
          </C.AddImage>
          <input
            style={{ display: "none" }}
            type="file"
            ref={props.fileRef}
            onChange={props.onChangeFile}
            //화면에만 안보이는거
          />
        </C.ImageWrapper>

        <C.DivisionLine />

        <C.Footer>
          <Button
            onClick={props.onClickSubmit}
            isValid={props.formState.isValid}
            name="Submit"
            data={props.data}
          />
        </C.Footer>
      </form>
    </C.Wrapper>
  );
}
