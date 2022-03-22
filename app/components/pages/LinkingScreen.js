import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

// const unsupportedURL =
//   "otpauth://totp/Secure:alice%40google.com?secret=JBSWY3DPEHPK3PXP&issuer=Secure";

// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(url);
//     console.log(supported);
//     if (supported) {
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };

function LinkingScreen() {
  const url = "otpauth://totp/Secure:alice%40google.com";
  function openLink() {
    // const handlePress =
    // useCallback(async () => {
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(`Cannot open this URL: ${url}`);
    }
    // }, [url]);
    // Linking.openURL("otpauth://totp/Secure:alice%40google.com");
    // Linking.openURL(supportedURL);
  }
  return (
    <View style={styles.container}>
      <Button
        title="open link"
        onPress={() => {
          openLink();
        }}
      ></Button>
      {/* <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default LinkingScreen;
