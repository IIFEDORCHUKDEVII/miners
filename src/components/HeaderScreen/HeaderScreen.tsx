import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store/hooks";
import { selectCoins } from "../../store/features/balance";
import { RootStackMenuScreenProps } from "../../navigation/RootNavigation.types";

interface HeaderScreenProps {
  title: string;
  visibleGamesBtns?: boolean;
  visibleLifeCounts?: boolean;
}

const HeaderScreen: FC<HeaderScreenProps> = ({
  title,
  visibleGamesBtns,
  visibleLifeCounts,
}) => {
  const badges: Record<string, any> = {
    ["menu"]: require("../../assets/images/menu.png"),
    ["privacy"]: require("../../assets/images/privacy.png"),
    ["settings"]: require("../../assets/images/settings.png"),
    ["games"]: require("../../assets/images/games.png"),
  };
  const navigation = useNavigation<RootStackMenuScreenProps["navigation"]>();
  const coins = useAppSelector(selectCoins);
  const [life, setLife] = useState<number>(3);
  const onPressSettings = () => {
    navigation.dispatch(
      StackActions.popTo("MenuScreen", {
        screen: "SettingsScreen",
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/back.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          source={badges[title]}
          style={styles.badgeImage}
        />
      </View>
      {visibleGamesBtns && (
        <View style={styles.rightSection}>
          <ImageBackground
            resizeMode="contain"
            style={styles.coinContainer}
            source={require("../../assets/images/coins.png")}
          >
            <Text style={styles.coinText}>{coins}</Text>
          </ImageBackground>
          <View style={styles.lifeAndSettingsContainer}>
            {visibleLifeCounts && (
              <View style={styles.lifeContainer}>
                {[1, 2, 3].map((_, index) => (
                  <Image
                    key={index}
                    resizeMode="contain"
                    style={styles.lifeImage}
                    source={
                      life < index + 1
                        ? require("../../assets/images/wasted.png")
                        : require("../../assets/images/life.png")
                    }
                  />
                ))}
              </View>
            )}
            <TouchableOpacity onPress={onPressSettings}>
              <Image
                style={styles.settingsButton}
                source={require("../../assets/images/settingBtn.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  leftSection: {
    width: "50%",
  },
  backButton: {
    width: 220,
    height: 100,
    marginBottom: 10,
  },
  badgeImage: {
    width: 256,
    height: 100,
    marginBottom: 10,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  coinContainer: {
    height: 60,
    width: 120,
    paddingRight: 20,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  coinText: {
    fontFamily: "BlackOpsOne-Regular",
    color: "#FFE500",
    textAlign: "right",
    fontSize: 18,
  },
  lifeAndSettingsContainer: {
    flexDirection: "row",
  },
  lifeContainer: {
    width: 140,
    paddingHorizontal: 10,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#341806",
    borderRadius: 100,
    borderColor: "#FFE500",
    borderWidth: 1,
  },
  lifeImage: {
    height: 38,
    width: 38,
  },
  settingsButton: {
    height: 67,
    width: 67,
  },
});
