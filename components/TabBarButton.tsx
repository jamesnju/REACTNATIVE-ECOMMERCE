import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/Icons";
import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { onLongPress, onPress, label, routeName,isFocused } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
        {routeName === 'cart' && (
        // cart badge is here 
        <View style={styles.badgeWrapper}>
            <Text style={styles.badgeText}>3</Text>
        </View>
        )}
      {/* {icon[routeName]({ 
        color: isFocused ? Colors.primary : Colors.black,
        })} */}

      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  badgeWrapper:{
    position: 'absolute',
    backgroundColor: Colors.highlight,
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex:10
  },
  badgeText:{
    color: Colors.black,
    fontSize:12,
  },
});
