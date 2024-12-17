import { StyleSheet, TextInput, FlatList, Pressable } from 'react-native';
import { useState, useCallback } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface SearchResult {
    id: string;
    title: string;
    description: string;
    category: string;
}

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = useCallback(async (text: string) => {
        setQuery(text);
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setResults([
            { id: '1', title: 'Result 1', description: 'Description 1', category: 'Category A' },
            { id: '2', title: 'Result 2', description: 'Description 2', category: 'Category B' },
            { id: '3', title: 'Result 3', description: 'Description 3', category: 'Category C' },
            { id: '4', title: 'Result 4', description: 'Description 4', category: 'Category D' },
            { id: '5', title: 'Result 5', description: 'Description 5', category: 'Category E' }
        ]);
        setIsLoading(false);
    }, []);

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.searchContainer}>
                <IconSymbol name="paperplane.fill" size={20} color="#007AFF" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={query}
                    onChangeText={handleSearch}
                />
            </ThemedView>

            {isLoading ? (
                <ThemedText>Loading...</ThemedText>
            ) : (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable style={styles.resultItem}>
                            <ThemedText type="subtitle">{item.title}</ThemedText>
                            <ThemedText>{item.description}</ThemedText>
                            <ThemedText style={styles.category}>{item.category}</ThemedText>
                        </Pressable>
                    )}
                    ListEmptyComponent={
                        <ThemedView style={styles.emptyState}>
                            <ThemedText>Start typing to search</ThemedText>
                        </ThemedView>
                    }
                />
            )}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 12,
        marginBottom: 16
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16
    },
    resultItem: {
        padding: 16,
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: 8,
        marginBottom: 8
    },
    category: {
        marginTop: 4,
        opacity: 0.6
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 32
    }
});
