import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [apps, setApps] = useState([]);

  // ✏️ Simulación: selector de apps
  const handleEdit = () => {
    Alert.alert(
      "Selector de apps",
      "Aquí se abriría el cajón de aplicaciones nativo.",
      [{ text: "OK" }]
    );
  };

  // ❌ Cerrar ventana
  const handleClose = () => {
    Alert.alert("Cerrar", "Aquí cerrarías la ventana flotante.");
  };

  // 🚀 Simulación: abrir app
  const handleLaunch = (app) => {
    Alert.alert("Abrir app", `Aquí se abriría: ${app.name}`);
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.window}>
        {/* Barra superior */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topButton} onPress={handleEdit}>
            <Feather name="edit-2" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButton} onPress={handleClose}>
            <Feather name="x" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Lista vertical de apps */}
        <ScrollView
          contentContainerStyle={styles.appsContainer}
          showsVerticalScrollIndicator={false}
        >
          {apps.length === 0 ? (
            <Text style={styles.emptyText}>Sin aplicaciones agregadas</Text>
          ) : (
            apps.map((app, index) => (
              <TouchableOpacity key={index} style={styles.appItem} onPress={() => handleLaunch(app)}>
                <Image source={{ uri: app.icon }} style={styles.appIcon} />
                <Text style={styles.appName}>{app.name}</Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  window: {
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 14,
    width: "80%",
    maxWidth: 350,
    maxHeight: "80%",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  topButton: {
    marginLeft: 15,
  },
  appsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 20,
  },
  appItem: {
    alignItems: "center",
    margin: 10,
    width: 60,
  },
  appIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginBottom: 5,
  },
  appName: {
    fontSize: 11,
    color: "#e0e0e0",
    textAlign: "center",
  },
  emptyText: {
    color: "#777",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },
});
