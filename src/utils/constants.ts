export const routeUrls = {
  home: "/",
  productListing: "/productList",
  product: {
    index: (productId: string) => `product/${productId}`,
  },
  auth: "/auth",
};
