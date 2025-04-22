import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import { TouchableOpacity, View,  StyleSheet,  Text} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Google from "@/assets/images/google-logo.svg";

type Props = {
  emailHref: Href<string | object>
};

const SocialLogin = (props: Props) => {
  const {emailHref} = props;
  return (
    <View style={styles.loginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.btnText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(300).duration(400)}>
        <TouchableOpacity style={styles.button}>
          <Google height={20} width={20} />
          <Text style={styles.btnText}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(400).duration(600)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />{" "}
          <Text style={styles.btnText}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
loginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    gap: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },})