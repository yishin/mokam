import { Dimensions, StyleSheet } from "react-native";

// H / W : 640 X 360
export const { width, height } = Dimensions.get("window");
const ratio = 16 * (width / height);
export const sr = (ratio < 9 ? width / 9 : height / 16) / (360 / 9);
// <View style={{ ...getWHFullPer(85, 80), ...centering }} >
export const getWHFullPer = (w, h) => ({
  width: srInt((width * w) / 100),
  height: srInt((height * h) / 100)
});
console.log(` Screen ${width} X ${height},  sr : ${sr}`);

/** style abstractions  */
// <View style={{ ...full, ...centering, backgroundColor: '#BBB9' }}>
export const centering = { justifyContent: "center", alignItems: "center" };
export const textCenter = { textAlign: "center" };
// <View style={{ flexDirection: 'row', ...bottomLine('#DDD4') }}>
export const bottomLine = col => ({ borderBottomWidth: 1, borderColor: col });

/** Drop to Integer */
export const srInt = dim => parseInt(dim * sr);
// apply screen ratio :: getSrInt(30), getSrInt(20, 10, 15, 25)
export function getSrInt(...args) {
  if (args.length > 1) return args.map(ival => srInt(ival));
  return srInt(args[0]);
}

// Utils
// <View style={{ ...full, backgroundColor: '#BBB9' }}>
export const full = { flex: 1, width: "100%", height: "100%" };
// apply screen ratio :: getSr(30), getSr(20, 10, 15, 25)
export function getSr(...args) {
  if (args.length > 1) return args.map(ival => ival * sr);
  return args[0] * sr;
}
// <Image style={{ ...boxSize(30) }} >
export const boxSize = sz => ({ width: sz * sr, height: sz * sr });
