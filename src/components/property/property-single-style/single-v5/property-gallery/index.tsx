import React from "react";
import GalleryBox from "./GalleryBox";
import Map from "./MapView";
import RealMapView from "./RealMapView";
import { Property } from "@/module/property/Property";

interface PropertyGalleryProps {
  property: Property;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ property }) => {
  const latitude = parseFloat(property.lat);
  const longitude = parseFloat(property.lng);

  console.log("Latitude:", latitude, "Longitude:", longitude); // 위도와 경도 값을 확인

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ps-v4-hero-tab at-v5 position-relative">
              <ul
                className="nav nav-pills justify-content-end"
                id="pills-tab2"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active mr10"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <span className="flaticon-images text-white fz20" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link mr10"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <span className="flaticon-map text-white fz20" />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <span className="flaticon-maps-1 text-white fz20" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container-fluid p-0">
              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider-2">
                    <GalleryBox property={property} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Map lat={latitude} lng={longitude} label={property.atclNm}/>
            {/* label={property.atclNm || "Default Label"} */}
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <RealMapView lat={latitude} lng={longitude} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyGallery;