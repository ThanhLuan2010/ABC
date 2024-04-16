import { theme } from "@theme";
import { getSize, width } from "@utils/responsive";
import { get } from "lodash";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ic_message: {
    width: getSize.s(46),
    height: getSize.s(43),
  },
  ic_bell: {
    width: getSize.s(48),
    height: getSize.s(48),
  },
  icEye: {
    width: getSize.s(19),
    height: getSize.s(19),
    resizeMode: "contain",
  },
  banner: {
    width: width - 70,
    height: getSize.v(130),
    resizeMode: "contain",
  },
  tienich:{
    width: getSize.s(24),
    height: getSize.s(24),
    resizeMode: "contain",
  },
  shadow:{
    elevation:10,
    shadowColor:'rgba(0,0,0,0.5)'
  }
});

export default styles;
