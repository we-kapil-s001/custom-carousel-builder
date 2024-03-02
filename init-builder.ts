import CustomCarousel from "./components/Carousel.vue";

export const REGISTERED_COMPONENTS = [
    {
        component: CustomCarousel,
        name: 'Carousel',
        inputs: [
            {
                name: 'sliderIndicators',
                type: 'boolean',
                defaultValue: true,
            },
            {
                name: 'sliderControls',
                type: 'boolean',
                defaultValue: true,
            },
            {
                name: 'sliderItems',
                type: 'list',
                subFields: [
                    {
                        name: 'img',
                        type: 'file',
                        defaultValue: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
                    }
                ],
                defaultValue: [
                    {img: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'},
                    {img: 'https://flowbite.com/docs/images/carousel/carousel-2.svg'}
                ]
            }
        ]
    },
]
