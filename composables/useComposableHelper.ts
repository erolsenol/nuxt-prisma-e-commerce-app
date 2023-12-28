const runtimeConfig = useRuntimeConfig();

export const useImageStorageTypeCalc = (type = "") => {
  if (type === "s3" && runtimeConfig.public.SAVE_IMAGE_S3 == "true") {
    return type;
  }
  return "local";
};
