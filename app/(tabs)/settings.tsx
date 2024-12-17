import { StyleSheet, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SettingsItem } from '@/components/SettingsItem';

export default function SettingsScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <ThemedView style={styles.section}>
                <ThemedText type="subtitle">Preferences</ThemedText>
                <SettingsItem title="Dark Mode" hasSwitch value={darkMode} onValueChange={setDarkMode} />
                <SettingsItem title="Notifications" hasSwitch value={notifications} onValueChange={setNotifications} />
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle">Privacy</ThemedText>
                <SettingsItem title="Privacy Policy" onPress={() => {}} />
                <SettingsItem title="Terms of Service" onPress={() => {}} />
            </ThemedView>

            <ThemedView style={styles.section}>
                <ThemedText type="subtitle">About</ThemedText>
                <SettingsItem title="App Version: 1.0.0" />
                <SettingsItem title="Rate App" onPress={() => {}} />
                <SettingsItem title="Send Feedback" onPress={() => {}} />
            </ThemedView>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    section: {
        marginBottom: 24,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.05)'
    }
});
