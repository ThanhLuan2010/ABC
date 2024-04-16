import { Block } from "@components";
import { orderSelect } from "@store/slices/order";
import { theme } from "@theme";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const DonHangScreen = () => {
  const dispatch = useDispatch();
  const { listOrder } = useSelector(orderSelect);
  const [refreshing, setrefreshing] = useState(false);
  const [page, setpage] = useState(1);
  const [canLoadmore, setcanLoadmore] = useState(true);

  return <Block flex backgroundColor={theme.colors.backgroundGreen}></Block>;
};

export default DonHangScreen;
