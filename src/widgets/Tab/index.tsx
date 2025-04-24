"use client";

import TabItem from "@/components/TabItem";
import { SwiperSlide, Swiper } from "swiper/react";

const pages = ["Live", "StartList", "Schedule", "Results", "Medals"];

export default function Tab() {
  return (
    <>
      <nav className="tab-wrapper flex md:display-none overflow-hidden">
        <Swiper slidesPerView={3} style={{ width: "100%", display: "flex" }}>
          {pages.map((page) => (
            <SwiperSlide key={page}>
              <TabItem isLive={page.toLowerCase() === "live"} text={page} />
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
      <div className="tab-wrapper md:flex display-none ">
        {pages.map((page) => (
          <TabItem
            key={page}
            isLive={page.toLowerCase() === "live"}
            text={page}
          />
        ))}
      </div>
    </>
  );
}
