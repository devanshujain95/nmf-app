import { StyleSheet } from "react-native";
import { Colors } from "../../style";

export default StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 4,
  },
  tabItemSelected: {
    flex: 1,
    borderBottomColor: Colors.green50,
    borderBottomWidth: 4,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
