import { images } from "@assets";
import { Block, Button, Text } from "@components";
import { goBack, reset } from "@navigation/RootNavigation";
import { routes } from "@navigation/routes";
import { dispatch } from "@store/configStore";
import { historySelect, setDataHistory } from "@store/slices/history";
import { theme } from "@theme";
import { formatPrice } from "@utils/helper";
import { width } from "@utils/responsive";
import React from "react";
import { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const EditBillScreen = ({ route }) => {
  const { item } = route.params;
  const [amount, setamount] = useState(item.amount);
  const [name, setname] = useState(item.name);
  const [date, setdate] = useState(item.date);
  const [time, settime] = useState(item.time);
  const [nameRecive, setnameRecive] = useState(item.recive.name);
  const [stk, setstk] = useState(item.recive.stk);
  const [bank_name, setbank_name] = useState(item.recive.bank_name);
  const [description, setdescription] = useState(item.description);
  const [transation_code, settransation_code] = useState(item.transaction_code);
  const { dataHistory } = useSelector(historySelect);
  const onSave = () => {
    const dataFilter = dataHistory.filter((his) => his.id !== item.id);
    const newTransation = {
      ...item,
      amount,
      date,
      time,
      description,
      transaction_code: transation_code,
      recive: {
        name: nameRecive,
        bank_name: bank_name,
        stk: stk,
      },
    };
    const dataAfterEdit = [newTransation, ...dataFilter];
    dispatch(setDataHistory(dataAfterEdit));
    reset(0, routes.BOTTOM_TAB);
    // goBack()
    console.log("====dataAfterEdit====", dataAfterEdit);
  };

  return (
    <Block flex>
      <Block paddingBottom={20} backgroundColor={"#0d6bc2"}>
        <Block
          marginHorizontal={20}
          paddingTop={40}
          space={"between"}
          row
          alignCenter
        >
          <Block row alignCenter></Block>
          <TouchableOpacity onPress={() => goBack()}>
            <Text color="white">Đóng</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Số tiền:</Text>
          <TextInput
            style={{ textAlign: "right" }}
            placeholder="Số tiền"
            value={amount.toString()}
            keyboardType="numeric"
            onChangeText={(value) => setamount(value)}
          />
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Ngày giao dịch:</Text>
          <TextInput
            style={{ textAlign: "right" }}
            placeholder="Ngày giao dịch"
            value={date}
            onChangeText={(value) => setdate(value)}
          />
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Giờ giao dịch:</Text>
          <TextInput
            placeholder="Giờ giao dịch"
            style={{ textAlign: "right" }}
            value={time}
            onChangeText={(value) => setdate(value)}
          />
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Tên người nhận:</Text>
          <TextInput
            placeholder="Tên người nhận"
            style={{ textAlign: "right" }}
            value={nameRecive}
            onChangeText={(value) => setnameRecive(value)}
          />
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text flex>Tên ngân hàng:</Text>
          <Block flex>
            <TextInput
              placeholder="Tên ngân hàng"
              style={{ textAlign: "right" }}
              value={bank_name}
              multiline
              onChangeText={(value) => setbank_name(value)}
            />
          </Block>
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Số tài khoản:</Text>
          <TextInput
            placeholder="Số tài khoản"
            style={{ textAlign: "right" }}
            value={stk}
            onChangeText={(value) => setstk(value)}
          />
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Nội dung:</Text>
          <Block flex>
            <TextInput
              placeholder="Nội dung"
              style={{ textAlign: "right" }}
              value={description}
              multiline
              onChangeText={(value) => setdescription(value)}
            />
          </Block>
        </Block>

        <Block marginHorizontal={30} row alignCenter space={"between"}>
          <Text>Số Giao dịch:</Text>
          <TextInput
            placeholder="Số Giao dịch"
            style={{ textAlign: "right" }}
            value={transation_code}
            onChangeText={(value) => settransation_code(value)}
          />
        </Block>
      </ScrollView>
      <Block marginHorizontal={20}>
        <Button onPress={onSave} title={"Lưu"} backgroundColor={"#0d6bc2"} />
      </Block>
    </Block>
  );
};

export default EditBillScreen;

const styles = StyleSheet.create({
  border: {
    borderStyle: "dashed",
  },
});
