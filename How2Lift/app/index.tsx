import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Index()
{
  const items = ["t1, t2", "t3"];
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/testPage" className="text-cyan-400">
        Enter the eternal void of the shadow realm
      </Link>
    </View>
  );
}
