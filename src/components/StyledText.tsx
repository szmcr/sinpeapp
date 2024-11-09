import { useFonts } from "expo-font";
import { Text, TextProps } from "./Themed";
import {
  RedHatDisplay_300Light,
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_900Black,
} from "@expo-google-fonts/red-hat-display";

export function MonoText(props: TextProps) {
  const [loaded, error] = useFonts({
    RedHatDisplay_300Light,
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold,
    RedHatDisplay_700Bold,
    RedHatDisplay_800ExtraBold,
    RedHatDisplay_900Black,
  });

  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "RedHatDisplay_400Regular" }]}
    />
  );
}
