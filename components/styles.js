import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2dbf2",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  warning: {
    color: "red",
  },
  normalText: {
    fontSize: 15,
    color: "#d6ecf1",
  },
  containerPractice1: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  titlePractice1: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor:"#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
