export function getFluidImage(image) {
    if (!image) return null;

    return image.childImageSharp.fluid;
}
