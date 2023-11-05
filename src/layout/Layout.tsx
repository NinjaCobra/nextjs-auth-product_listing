import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./Header";
import { useProductList } from "@/context/useProductList";
import { defaultProductList } from "@/db";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { handleChangeProductList } = useProductList();

  // initial fetch data (normally it should be done in getServerSideProps)
  const fetchData = () => {
    const productList = localStorage.getItem("productList");

    if (productList) {
      handleChangeProductList(JSON.parse(productList));
    } else {
      handleChangeProductList(defaultProductList);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
