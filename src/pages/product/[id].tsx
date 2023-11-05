import CommentTab from "@/components/ProductDetailPage/CommentTab";
import InfoTab from "@/components/ProductDetailPage/InfoTab";
import ProductDetailTabs, {
  TabType,
} from "@/components/ProductDetailPage/ProductDetailTabs";
import { useProductList } from "@/context/useProductList";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

let slideIndex = 0;
let slideList: NodeListOf<Element>;

const ProductDetailPage = () => {
  const { productList } = useProductList();
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState<TabType>(TabType.info);

  useEffect(() => {
    initializeSlider();
  }, []);

  const handleOpenCommentTab = () => {
    setActiveTab(TabType.comments);
  };

  const initializeSlider = () => {
    slideList = document.querySelectorAll(".slide-img");
    console.log(slideList);

    if (slideList.length > 0) {
      slideList[slideIndex].classList.add("active");
    }
  };

  const showSlide = (index: number) => {
    if (index >= slideList.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slideList.length - 1;
    }

    // remove the active class from all slides
    slideList.forEach((slide) => {
      slide.classList.remove("active");
    });
    // add the active class to the current slide
    slideList[slideIndex].classList.add("active");
  };

  const prevSlide = () => {
    slideIndex--;
    showSlide(slideIndex);
  };

  const nextSlide = () => {
    slideIndex++;
    showSlide(slideIndex);
  };

  // since there is no API to update and fetch these product items, I do it inside useEffect
  // otherwise I wanted to use getServersideProps to fetch these on the server side
  const product = productList.find((product) => product.id === router.query.id);

  if (!product) {
    return;
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="image-slider">
          <div className="slides">
            {product.productSliderList.map((slideUrl) => {
              return (
                <Image
                  className="slide-img"
                  src={slideUrl}
                  key={slideUrl}
                  width={720}
                  height={500}
                  alt="slide-image"
                />
              );
            })}
          </div>

          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className="tab-container">
          <ProductDetailTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === TabType.info ? (
            <InfoTab
              product={product}
              handleOpenCommentTab={handleOpenCommentTab}
            />
          ) : (
            <CommentTab product={product} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
