export const exampleStyle = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 1px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5)," +
    " 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold"
].join(";");

export const imprBig = [
  "background: linear-gradient(#DBA, #943)",
  "border: 1px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5)," +
    " 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 48px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 36px"
].join(";");

export const impr = [
  "background: linear-gradient(#D85, #35A)",
  "border: 1px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5)," +
    " 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "font-size: 16px",
  "line-height: 36px"
].join(";");

export const blackBG = [
  "background: linear-gradient(#511, #588)",
  "border: 1px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5)," +
    " 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "font-size: 14px",
  "line-height: 20px"
].join(";");

export const redBG = [
  "background: linear-gradient(#F11, #F33)",
  "border: 1px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5)," +
    " 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "font-size: 15px",
  "line-height: 50px"
].join(";");

export const greenBig = [
  "background: linear-gradient(#0F1, #3A8)",
  "color: white",
  "display: block",
  "font-size: 25px",
  "line-height: 35px"
].join(";");

export const greenTxt = [
  "background: linear-gradient(#5F8, #1F1)",
  "color: #303", // 'display: block ',
  "font-size: 12px",
  "line-height: 15px"
].join(";");

export const apis = [
  "color: #729",
  "font-size: 14px",
  "line-height: 20px"
].join(";");

export const norm = [
  "color: #027",
  "font-size: 12px",
  "line-height: 14px"
].join(";");

export const line = "++=====++ ".repeat(13);

export const lineSty = [
  "color: #F55",
  "display: block",
  "font-size: 9px",
  "line-height: 20px"
].join(";");

export const pale = "background: #EEE; color: #789; line-height: 16px;"; // font-weight: bold;

export const anltc = "background: #DEF; color: #987; line-height: 36px;"; // font-weight: bold;

export const logError = (st, ...rest) => {
  console.log(`%c\t E R R O R \t ${st}\t`, redBG, ...rest);
};

export const logBlackBG = (st, ...rest) => {
  console.log(`%c ${st}\t`, blackBG, ...rest);
};

export const logPaging = (st, ...rest) => {
  console.log(`%c ${st}\t`, greenBig, ...rest);
};

export const logGreen = (st, ...rest) => {
  console.log(`%c ${st}\t`, greenTxt, ...rest);
};
