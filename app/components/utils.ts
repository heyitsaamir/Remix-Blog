export const hexWithAlpha = (hex: string, alpha: number) => {
  if (alpha <= 0 || alpha >= 1) throw new Error('alpha needs to be between 0 and 1');

  let alphaHex = Math.round((alpha * 255)).toString(16);
  alphaHex = alphaHex.length == 1 ? "0" + alphaHex : alphaHex;
  return `${hex}${alphaHex}`
}