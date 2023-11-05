import React from "react";

const Index = () => {
  return <div>Index</div>;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/productList",
    },
  };
};

export default Index;
