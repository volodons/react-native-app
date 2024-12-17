import { Link, Stack, router } from 'expo-router';
import { StyleSheet, Animated, Pressable } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 8,
                useNativeDriver: true
            })
        ]).start();
    }, []);

    return (
        <>
            <Stack.Screen options={{ title: 'Page Not Found' }} />
            <ThemedView style={styles.container}>
                <Animated.View
                    style={[
                        styles.content,
                        {
                            opacity: fadeAnim,
                            transform: [{ scale: scaleAnim }]
                        }
                    ]}
                >
                    <Ionicons name="alert-circle-outline" size={80} color="#FF3B30" />
                    <ThemedText type="title">Oops! Page Not Found</ThemedText>
                    <ThemedText style={styles.subtitle}>
                        The page you're looking for doesn't exist or has been moved.
                    </ThemedText>

                    <ThemedView style={styles.buttonContainer}>
                        <Pressable
                            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                            onPress={() => router.back()}
                        >
                            <ThemedText style={styles.buttonText}>Go Back</ThemedText>
                        </Pressable>

                        <Link href="/" asChild>
                            <Pressable
                                style={({ pressed }) => [
                                    styles.button,
                                    styles.primaryButton,
                                    pressed && styles.buttonPressed
                                ]}
                            >
                                <ThemedText style={[styles.buttonText, styles.primaryButtonText]}>
                                    Home Screen
                                </ThemedText>
                            </Pressable>
                        </Link>
                    </ThemedView>
                </Animated.View>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    content: {
        alignItems: 'center',
        gap: 16
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 8,
        opacity: 0.7
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    buttonPressed: {
        opacity: 0.7
    },
    primaryButton: {
        backgroundColor: '#007AFF'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600'
    },
    primaryButtonText: {
        color: '#FFFFFF'
    }
});
