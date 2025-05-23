import React, { FC } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useData } from "./useData";
import Timer from "../Timer/Timer";
import { Header } from "react-native/Libraries/NewAppScreen";
interface TimerProps {
  isStart: boolean;
  setIsFinish: () => void;
}

interface HeaderScreenProps {
  title: string;
  visibleGamesBtns?: boolean;
  visibleLifeCounts?: boolean;
  visibleTimer?: boolean;
  timerProps?: TimerProps;
}
const HeaderScreen: FC<HeaderScreenProps> = ({
  title,
  visibleGamesBtns,
  visibleLifeCounts,
  visibleTimer,
  timerProps = { isStart: false, setIsFinish: () => {} },
}) => {
  const { badges, coins, life, onGoBack, onPressSettings } = useData();
  const { isStart, setIsFinish } = timerProps;
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={onGoBack}>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/back.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
        {visibleTimer && <Timer isStart={isStart} setIsFinish={setIsFinish} />}
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
                      life >= index + 1
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
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  leftSection: {
    width: "50%",
  },
  backButton: {
    width: 220,
    height: 100,
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
    maxHeight: 45,
    marginTop: 12,
    width: 140,
    flex: 1,
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
    alignItems: "center",
  },
  lifeContainer: {
    width: 140,
    paddingHorizontal: 10,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
