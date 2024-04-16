import { images } from "@assets";
import { Block, Text } from "@components";
import { theme } from "@theme";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { getSize, width } from "@utils/responsive";
import Carousel from "react-native-reanimated-carousel";
import { navigate } from "@navigation/RootNavigation";

const bannerData = [
  { img: images.homebanner1 },
  { img: images.homebanner2 },
  { img: images.homebanner3 },
];
const HomeView = ({ navigation }) => {
  const [isShowBalance, setisShowBalance] = useState(false);
  return <Block></Block>;
  // return (
  //   <Block flex backgroundColor={theme.colors.background}>
  //     {/* heaer */}
  //     <Block
  //       space={"between"}
  //       marginTop={38}
  //       marginHorizontal={20}
  //       row
  //       alignCenter
  //     >
  //       <Block row alignCenter>
  //         <Block
  //           alignCenter
  //           justifyCenter
  //           radius={48}
  //           width={48}
  //           height={48}
  //           backgroundColor={"#737AA0"}
  //         >
  //           <Text
  //             color={theme.colors.white}
  //             size={18}
  //             fontFamily={theme.fonts.fontFamily.SourceSans3SemiBold}
  //           >
  //             ND
  //           </Text>
  //         </Block>
  //         <Block space={"between"} marginLeft={7} height={48}>
  //           <Text>Chào buổi sáng</Text>
  //           <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>Duy</Text>
  //         </Block>
  //       </Block>

  //       <Block row alignCenter>
  //         <TouchableOpacity>
  //           <Image source={images.ic_message} style={styles.ic_message} />
  //         </TouchableOpacity>

  //         <TouchableOpacity style={{ marginLeft: 12 }}>
  //           <Image source={images.ic_bell} style={styles.ic_bell} />
  //         </TouchableOpacity>
  //       </Block>
  //     </Block>
  //     {/* heaer */}

  //     {/* số dư */}
  //     <Block
  //       marginTop={30}
  //       space={"between"}
  //       marginHorizontal={20}
  //       row
  //       alignCenter
  //     >
  //       <Block
  //         height={getSize.v(65)}
  //         width={(width - 53) / 2}
  //         backgroundColor={"#E8F1FA"}
  //         radius={10}
  //         space={"between"}
  //         padding={10}
  //       >
  //         <Block row alignCenter>
  //           <TouchableOpacity onPress={() => setisShowBalance(!isShowBalance)}>
  //             <Image
  //               source={isShowBalance ? images.ic_eyeOpen : images.ic_eyeClose}
  //               style={styles.icEye}
  //             />
  //           </TouchableOpacity>
  //           <Text marginLeft={5}>Số dư khả dụng</Text>
  //         </Block>
  //         <Block>
  //           <Text
  //             fontFamily={theme.fonts.fontFamily.SourceSans3Bold}
  //             color="#147EF4"
  //             numberOfLines={1}
  //           >
  //             {isShowBalance ? "1000,000,000" : "***000"} <Text>VND</Text>
  //           </Text>
  //         </Block>
  //       </Block>

  //       <Block
  //         height={getSize.v(65)}
  //         width={(width - 53) / 2}
  //         backgroundColor={"#E8F1FA"}
  //         radius={10}
  //         space={"between"}
  //         padding={10}
  //       >
  //         <Block row alignCenter>
  //           <Text marginRight={5}>ACB Rewards</Text>
  //           <TouchableOpacity onPress={() => setisShowBalance(!isShowBalance)}>
  //             <Image source={images.ic_arrowRight} style={styles.icEye} />
  //           </TouchableOpacity>
  //         </Block>
  //         <Block>
  //           <Text
  //             fontFamily={theme.fonts.fontFamily.SourceSans3Bold}
  //             color="#147EF4"
  //             numberOfLines={1}
  //           >
  //             930 <Text>Điểm</Text>
  //           </Text>
  //         </Block>
  //       </Block>
  //     </Block>
  //     {/* số dư */}

  //     {/* carousel */}
  //     <Carousel
  //       width={width}
  //       height={getSize.v(130)}
  //       mode="horizontal-stack"
  //       modeConfig={{
  //         moveSize: 200,
  //         stackInterval: 30,
  //         scaleInterval: 0.08,
  //         rotateZDeg: 135,
  //         snapDirection: "left",
  //       }}
  //       data={bannerData}
  //       style={{ marginHorizontal: 20, marginTop: 30 }}
  //       onSnapToItem={(index) => console.log("current index:", index)}
  //       renderItem={({ item, index }) => (
  //         <Block>
  //           <Image style={styles.banner} source={item.img} />
  //         </Block>
  //       )}
  //     />
  //     {/* carousel */}

  //     <Block
  //       marginHorizontal={20}
  //       space={"between"}
  //       alignCenter
  //       marginTop={30}
  //       row
  //     >
  //       <Text>Dịch vụ ngân hàng</Text>
  //       <Text color="#3366C1">Tổng quan tài chính</Text>
  //     </Block>

  //     <Block
  //       marginTop={23}
  //       marginHorizontal={20}
  //       backgroundColor={theme.colors.white}
  //       row
  //       space={"between"}
  //       // paddingHorizontal={20}
  //       paddingVertical={24}
  //       radius={8}
  //       style={styles.shadow}
  //     >
  //       <Block flex alignCenter>
  //         <TouchableOpacity
  //           style={{ alignItems: "center" }}
  //           onPress={() => navigate("AccountScreen")}
  //         >
  //           <Image source={images.ic_bank} style={styles.tienich} />
  //           <Text size={12}>Tài khoản</Text>
  //         </TouchableOpacity>
  //       </Block>

  //       <Block flex alignCenter>
  //         <Image source={images.ic_pig} style={styles.tienich} />
  //         <Text size={12}>Tiết kiệm</Text>
  //       </Block>

  //       <Block flex alignCenter>
  //         <Image source={images.ic_vay} style={styles.tienich} />
  //         <Text size={12}>Vay</Text>
  //       </Block>

  //       <Block flex alignCenter>
  //         <Image source={images.ic_card} style={styles.tienich} />
  //         <Text size={12}>Thẻ</Text>
  //       </Block>
  //     </Block>

  //     <Block marginHorizontal={20} marginTop={30}>
  //       <Text>Dịch vụ khác</Text>
  //     </Block>

  //     <Block
  //       marginTop={9}
  //       marginHorizontal={20}
  //       row
  //       alignCenter
  //       space={"between"}
  //     >
  //       <Block
  //         width={(width - 56) / 3}
  //         padding={9}
  //         height={getSize.v(154)}
  //         backgroundColor={theme.colors.white}
  //         radius={12}
  //         style={styles.shadow}
  //         flex
  //         marginRight={8}
  //       >
  //         <Image source={images.ic_applePay} style={styles.icApplePay} />
  //         <Text marginTop={5}>Apple Pay</Text>
  //       </Block>
  //       <Block
  //         width={(width - 56) / 3}
  //         padding={9}
  //         height={getSize.v(154)}
  //         backgroundColor={theme.colors.white}
  //         radius={12}
  //         style={styles.shadow}
  //         flex
  //         marginRight={8}
  //       >
  //         <Image source={images.ic_sunLife} style={styles.ic_sunLife} />
  //         <Text marginTop={5}>Chọn mỗi ngày tươi sáng</Text>
  //       </Block>

  //       <Block
  //         backgroundColor={theme.colors.white}
  //         padding={9}
  //         style={styles.shadow}
  //         radius={12}
  //         flex
  //         width={(width - 56) / 3}
  //         height={getSize.v(154)}
  //         marginRight={8}
  //       >
  //         <Image source={images.ic_familybank} style={styles.ic_familybank} />
  //         <Text marginTop={5}>Ưu đãi dành cho cả gia đình</Text>
  //       </Block>
  //     </Block>
  //   </Block>
  // );
};

export default HomeView;
