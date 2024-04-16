import { baseQuery } from "@api/baseQuery";
import { icons, images } from "@assets";
import {
  Block,
  DropdowPicker,
  GradientButton,
  KeyboardWrap,
  Text,
} from "@components";
import { goBack, navigate } from "@navigation/RootNavigation";
import auth from "@react-native-firebase/auth";
import { theme } from "@theme";
import { validatePhone } from "@utils/helper";
import { setLoading } from "@utils/navigator";
import { width } from "@utils/responsive";
import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  useEffect(() => {
    getDataProvince();
  }, []);
  const [security, setSecurity] = useState(true);
  const [securityRePass, setSecurityRepass] = useState(true);
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [dataProvince, setdataProvince] = useState([]);
  const [dataDistrict, setdataDistrict] = useState([]);
  const [selectedProvince, setselectedProvince] = useState(null);
  const [selectedDistrict, setselectedDistrict] = useState(null);
  const { top } = useSafeAreaInsets();
  const districtRef = useRef();

  const getDataProvince = async () => {
    const response = await baseQuery({
      url: "viet-nam/province",
    });

    const { data, status } = response;
    if (status && data) {
      setdataProvince(data);
    }
  };

  const getDataDistrict = async (province_id) => {
    const response = await baseQuery({
      url: "viet-nam/district",
      query: {
        province_id: province_id,
      },
    });
    const { data, status } = response;
    if (status && data) {
      setdataDistrict(data);
    }
  };
  const onRegister = async () => {
    if (rePassword !== password) {
      showMessage({
        message: "Thất bại",
        type: "danger",
        description: "Xác nhận mật khẩu không khớp",
      });
    }
    if (password && rePassword && phone && password === rePassword && selectedDistrict && selectedProvince )  {
      if (validatePhone(phone)) {
        if (password.length >= 6) {
          try {
            setLoading(true);
            const fullPhone = `+84${phone?.replace("0", "")}`;
            const confirmation = await auth().signInWithPhoneNumber(fullPhone);
            setLoading(false);
            navigate("OtpScreen", {
              confirmation: confirmation,
              phone: phone,
              password: password,
              rePassword: rePassword,
              province:selectedProvince?.id,
              district:selectedDistrict?.id
            });
          } catch (error) {
            setLoading(false);
            showMessage({
              message: "Thất bại",
              type: "danger",
              description: "Đã có lỗi xảy ra! Vui lòng thử lại!",
            });
          }
        } else {
          showMessage({
            message: "Thất bại",
            type: "danger",
            description: "Đặt mật khẩu tối thiểu 6 ký tự!",
          });
        }
      } else {
        showMessage({
          message: "Thất bại",
          type: "danger",
          description: "Số điện thoại không đúng định dạng",
        });
      }
    }
  };

  return (
    <LinearGradient
      style={[styles.backgroundColor, {}]}
      colors={theme.colors.backgroundColor}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardWrap>
          <Block
            marginBottom={30}
            style={{ flex: 2 }}
            justifyCenter
            alignCenter
          >
            <Image
              source={images.logo}
              style={[styles.logo, { marginTop: top }]}
            />
            <Text
              marginTop={32}
              size={24}
              fontType={"bold"}
              color={theme.colors.white}
            >
              Đăng ký
            </Text>
          </Block>
          <Block marginHorizontal={20} style={{ flex: 3 }}>
            <Block flex space={"between"}>
              <Block marginBottom={30}>
                <Block row alignCenter marginBottom={20}>
                  <Image source={icons.ic_phone} style={styles.ic_phone} />
                  <Text size={18} color={theme.colors.white} marginLeft={14}>
                    Số điện thoại
                  </Text>
                </Block>
                <Block
                  alignCenter
                  row
                  borderBottomWidth={1}
                  borderColor={theme.colors.gray2}
                  paddingBottom={10}
                >
                  <Text color={theme.colors.gray2}>(84+)</Text>
                  <Block
                    marginHorizontal={8}
                    height={24}
                    width={1}
                    backgroundColor={theme.colors.gray2}
                  />
                  <TextInput
                    value={phone}
                    onChangeText={(txt) => setphone(txt)}
                    keyboardType="numeric"
                    style={styles.inputNumber}
                  />
                </Block>
              </Block>

              <Block marginBottom={30}>
                <Block>
                  <Block row alignCenter marginBottom={20}>
                    <Image source={icons.ic_key} style={styles.ic_phone} />
                    <Text marginLeft={14} size={18} color={theme.colors.white}>
                      Mật khẩu
                    </Text>
                  </Block>
                  <Block
                    alignCenter
                    row
                    borderBottomWidth={1}
                    borderColor={theme.colors.gray2}
                  >
                    <TextInput
                      secureTextEntry={security}
                      style={styles.inputNumber}
                      value={password}
                      onChangeText={(txt) => setpassword(txt)}
                    />
                    <TouchableOpacity onPress={() => setSecurity(!security)}>
                      <Image
                        source={security ? icons.ic_closeEye : icons.ic_openEye}
                      />
                    </TouchableOpacity>
                  </Block>
                </Block>
                {password && password.length < 6 && (
                  <Text marginTop={5} color={theme.colors.lightRed}>
                    * Mật khẩu tối thiểu 6 ký tự
                  </Text>
                )}
              </Block>

              <Block marginBottom={30}>
                <Block>
                  <Block row alignCenter marginBottom={20}>
                    <Image source={icons.ic_key} style={styles.ic_phone} />
                    <Text marginLeft={14} size={18} color={theme.colors.white}>
                      Nhập lại mật khẩu
                    </Text>
                  </Block>
                  <Block
                    alignCenter
                    row
                    borderBottomWidth={1}
                    borderColor={theme.colors.gray2}
                  >
                    <TextInput
                      secureTextEntry={securityRePass}
                      style={styles.inputNumber}
                      value={rePassword}
                      onChangeText={(txt) => setrePassword(txt)}
                    />
                    <TouchableOpacity
                      onPress={() => setSecurityRepass(!securityRePass)}
                    >
                      <Image
                        source={
                          securityRePass ? icons.ic_closeEye : icons.ic_openEye
                        }
                      />
                    </TouchableOpacity>
                  </Block>
                </Block>
                {rePassword && rePassword !== password && (
                  <Text marginTop={5} color={theme.colors.lightRed}>
                    * Nhập lại mật khẩu không khớp
                  </Text>
                )}
              </Block>

              <DropdowPicker
                onSelectItem={(province) => {
                  setselectedProvince(province);
                  getDataDistrict(province.id);
                }}
                data={dataProvince}
                placeholder={"Chọn tỉnh/Thành phố"}
              />

              <DropdowPicker
                ref={districtRef}
                placeholder={"Chọn quận/Huyện"}
                containerStyle={styles.dropdowContain}
                data={dataDistrict}
                onFocus={() => {
                  if (!selectedProvince) {
                    showMessage({
                      message: "",
                      type: "danger",
                      description: "Vui lòng chọn tỉnh/Thành phố trưóc!",
                    });
                  }
                }}
                onSelectItem={(District) => {
                  setselectedDistrict(District);
                }}
              />
            </Block>

            <Block marginTop={50} marginBottom={40} justifyCenter>
              <GradientButton
                title="Đăng Ký"
                style={styles.button}
                styleTitle={styles.titleButton}
                onPress={onRegister}
                disable={phone && password && rePassword ? false : true}
              />
              <Pressable style={styles.btnRegister} onPress={() => goBack()}>
                <Text size={18} color={theme.colors.white} center>
                  Quay lại
                </Text>
              </Pressable>
            </Block>
          </Block>
        </KeyboardWrap>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },
  logo: {
    width: width - 46 * 2,
    height: 200,
    resizeMode: "contain",
  },
  ic_phone: {
    width: 19,
    height: 19,
    resizeMode: "contain",
  },
  inputNumber: {
    flex: 1,
    fontSize: 18,
    color: theme.colors.white,
    fontFamily: theme.fonts.fontFamily.SourceSans3Regular,
    paddingVertical: 0,
  },
  checkBox: {
    width: 27,
    height: 27,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
  button: {
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  btnRegister: {
    marginTop: 15,
    alignSelf: "center",
  },
  titleButton: {
    fontSize: 18,
  },
  dropdowContain: {
    backgroundColor: "transparent",
    marginTop: 30,
  },
});
