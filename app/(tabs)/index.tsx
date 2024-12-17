import { Image, StyleSheet, RefreshControl, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setRefreshing(false);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <Animated.View style={{ opacity: fadeAnim }}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Welcome!</ThemedText>
                    <HelloWave />
                </ThemedView>

                <ThemedView style={styles.quickActions}>
                    {['Profile', 'Settings', 'Search', 'Favorites', 'Help'].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`} asChild>
                            <ThemedView style={styles.actionItem}>
                                <IconSymbol name="chevron.right" size={20} color="#007AFF" />
                                <ThemedText>{item}</ThemedText>
                            </ThemedView>
                        </Link>
                    ))}
                </ThemedView>
            </Animated.View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 24
    },
    quickActions: {
        gap: 8,
        marginBottom: 24
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.03)'
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute'
    }
});
