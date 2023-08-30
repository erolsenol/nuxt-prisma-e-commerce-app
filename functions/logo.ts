import qs from "@/plugins/qs";

export const getLogo = async () => {
    let image = ref({})

    const logos = ["headerLogo", "footerLogo"]
    for (let index = 0; index < logos.length; index++) {
        const logo = logos[index];

        const config = {
            params: {
                ownerName: logo
            },
            paramsSerializer: (params) => qs.stringify(params, { encode: false })
        };

        console.log("config", config);
        // const data = await $fetch("/api/image", config)
        const { data, pending, error, refresh } = await useAsyncData(
            'logos',
            () => $fetch('/api/image',config)
          )

        console.log("logo request,logo request,logo request,logo request,logo request");
        console.log("data", data.value);

        if (data.value?.status) {
            image[logo] = data.value?.data
        }
    }

    return { headerLogo: image.value['headerLogo'], footerLogo: image.value['footerLogo'] }
}  