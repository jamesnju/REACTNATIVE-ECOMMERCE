import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import SocialLogin from "@/components/SocialLogin";
import InputField from "@/components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "SignIn",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}> Login to Your account</Text>
        <InputField
          placeholder="Enter Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Enter Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />
      
        <TouchableOpacity style={styles.btn}  onPress={() => {
            router.dismissAll();
            router.push("/(tabs)");
          }}>
          <Text style={styles.textbtn}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Don't have an account?{" "}
          <Link href={"/signup"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTextSpan}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </Text>
        <View style={styles.divider} />
        <SocialLogin emailHref={"/signin"} />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 20,
  },
  textbtn: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    
  },
  loginText: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
    marginBottom: 30,
  },
  loginTextSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider:{
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    marginBottom:30,
    width:'30%',
    
  }
});
