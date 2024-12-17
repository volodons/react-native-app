import { StyleSheet, Animated, FlatList } from 'react-native';
import { useState, useRef, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface FavoriteItem {
    id: string;
    title: string;
    category: string;
    dateAdded: Date;
}

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start();
    }, []);

    const renderEmptyState = () => (
        <ThemedView style={styles.emptyState}>
            <IconSymbol name="heart.fill" size={48} color="#FF3B30" />
            <ThemedText type="title">No Favorites Yet</ThemedText>
            <ThemedText>Items you like will appear here</ThemedText>
        </ThemedView>
    );

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <ThemedView style={styles.header}>
                <ThemedText type="title">Favorites</ThemedText>
            </ThemedView>

            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <ThemedView style={styles.favoriteItem}>
                        <ThemedText type="subtitle">{item.title}</ThemedText>
                        <ThemedText>{item.category}</ThemedText>
                    </ThemedView>
                )}
                ListEmptyComponent={renderEmptyState}
                contentContainerStyle={styles.listContent}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    header: {
        marginBottom: 24
    },
    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    favoriteItem: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 12
    },
    listContent: {
        flexGrow: 1
    }
});
