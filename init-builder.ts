import FlowCarousel from "~/components/FlowCarousel.vue";
import VueCarousel from "~/components/VueCarousel.vue";

export const REGISTERED_COMPONENTS = [
  {
    component: FlowCarousel,
    name: "FlowCarousel",
    inputs: [
      {
        name: "sliderIndicators",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "sliderControls",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "sliderItems",
        type: "list",
        subFields: [
          {
            name: "img",
            type: "file",
            defaultValue:
              "https://flowbite.com/docs/images/carousel/carousel-1.svg",
          },
        ],
        defaultValue: [
          { img: "https://flowbite.com/docs/images/carousel/carousel-1.svg" },
          { img: "https://flowbite.com/docs/images/carousel/carousel-2.svg" },
        ],
      },
    ],
  },
  {
    component: VueCarousel,
    name: "VueCarousel",
  },
];
