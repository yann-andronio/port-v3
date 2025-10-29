/*  Nettoie une URL Cloudinary pour retirer les paramètres de taille (ex: w_400, c_fill).*/
export const cleanCloudinaryUrl = (url: string): string => {
  if (!url || !url.includes("/upload/")) {
    return url;
  }
  try {
    const parts = url.split("/upload/");
    if (parts.length > 1) {
      const afterUpload = parts[1];
      const endOfTransformationIndex = afterUpload.indexOf("/");

      if (endOfTransformationIndex !== -1) {
        const transformationBlock = afterUpload.substring(
          0,
          endOfTransformationIndex
        );

        if (
          transformationBlock.includes("w_") ||
          transformationBlock.includes("h_") ||
          transformationBlock.includes("c_fill")
        ) {
          return url.replace(transformationBlock, "f_auto,q_auto");
        }
      }
    }
  } catch (error) {
    console.error("Erreur lors du nettoyage de l'URL Cloudinary:", error);
    return url;
  }

  return url;
};
