import { StyleSheet, Animated, Pressable, Image } from 'react-native';
import { useState, useRef, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface UserStats {
    posts: number;
    followers: number;
    following: number;
}

export default function ProfileScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [stats] = useState<UserStats>({
        posts: 42,
        followers: 1234,
        following: 567
    });

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }, []);

    if (isLoading) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText>Loading...</ThemedText>
            </ThemedView>
        );
    }

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <ThemedView style={styles.header}>
                <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.avatar} />
                <ThemedText type="title">John Doe</ThemedText>
                <ThemedText>john.doe@example.com</ThemedText>
            </ThemedView>

            <ThemedView style={styles.statsContainer}>
                {Object.entries(stats).map(([key, value]) => (
                    <ThemedView key={key} style={styles.statItem}>
                        <ThemedText type="title">{value}</ThemedText>
                        <ThemedText>{key}</ThemedText>
                    </ThemedView>
                ))}
            </ThemedView>

            <ThemedView style={styles.settingsContainer}>
                {['Edit Profile', 'Privacy', 'Notifications', 'Help'].map((item) => (
                    <Pressable key={item} style={({ pressed }) => [styles.settingsItem, pressed && styles.pressed]}>
                        <ThemedText>{item}</ThemedText>
                    </Pressable>
                ))}
            </ThemedView>

            <Pressable style={styles.logoutButton}>
                <ThemedText style={styles.logoutText}>Logout</ThemedText>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    header: {
        alignItems: 'center',
        marginBottom: 24
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24
    },
    statItem: {
        alignItems: 'center'
    },
    settingsContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 12,
        overflow: 'hidden'
    },
    settingsItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    logoutButton: {
        marginTop: 24,
        padding: 16,
        backgroundColor: '#FF3B30',
        borderRadius: 8,
        alignItems: 'center'
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
