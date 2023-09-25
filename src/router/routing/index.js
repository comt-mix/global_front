import pb from "./pb";
import test from "./test";

const Home = {
  path: "/",
  name: "MainView",
  component: () => import("@/layouts/CommonLayout.vue"),
  children: [
    {
      path: "",
      name: "home",
      component: () => import("@/views/Main/MainView.vue"),
    },
    {
      path: "product",
      name: "product",
      component: () => import("@/views/Product/ProductView.vue"),
    },
    {
      path: "digitalization",
      name: "digital",
      component: () => import("@/views/Digitalization/DigitalizationView.vue"),
    },
    {
      path: "company",
      name: "company",
      component: () => import("@/views/Company/CompanyView.vue"),
    },
    {
      path: "mobile-app",
      name: "app",
      component: () => import("@/views/MobileApp/MobileAppView.vue"),
    },
    {
      path: "contact-us",
      name: "contactus",
      component: () => import("@/views/ContactUs/ContactUsView.vue"),
    },
    {
      path: "contact-us/:inquiryType",
      name: "contactus-form",
      component: () => import("@/views/ContactUs/ContactUsInquiryView.vue"),
    },
    {
      path: "contact-us/complete",
      name: "complete",
      component: () => import("@/views/ContactUs/SuccessSubmittedView.vue"),
    },
  ],
};

const NotFound = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import("@/views/Error/NotFoundView.vue"),
};

// const Error = {
//   path: "/Error",
//   name: "Error",
//   component: () => import("@/views/Error/ErrorView.vue"),
// };

const routings = [Home, NotFound, ...pb];
routings.push(...test);

export default routings;
