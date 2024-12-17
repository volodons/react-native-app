import { StyleSheet, Animated, ScrollView, Pressable } from 'react-native';
import { useRef, useEffect } from 'react';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Collapsible } from '@/components/Collapsible';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: '1',
        question: 'How do I reset my password?',
        answer: 'Go to Settings > Security > Reset Password and follow the instructions.'
    },
    {
        id: '2',
        question: 'How do I update the app?',
        answer: 'The app updates automatically through your device app store.'
    },
    {
        id: '3',
        question: 'Where can I find my profile settings?',
        answer: 'Navigate to the Profile tab and tap on Edit Profile.'
    }
];

export default function HelpScreen() {
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
            <ScrollView>
                <ThemedView style={styles.header}>
                    <ThemedText type="title">Help Center</ThemedText>
                </ThemedView>

                <ThemedView style={styles.section}>
                    <ThemedText type="subtitle">Quick Help</ThemedText>
                    {['Getting Started', 'Account', 'Privacy', 'Technical Issues'].map((item) => (
                        <Pressable key={item} style={({ pressed }) => [styles.helpItem, pressed && styles.pressed]}>
                            <IconSymbol name="paperplane.fill" size={24} color="#007AFF" />
                            <ThemedText>{item}</ThemedText>
                            <IconSymbol name="chevron.right" size={20} color="#007AFF" />
                        </Pressable>
                    ))}
                </ThemedView>

                <ThemedView style={styles.section}>
                    <ThemedText type="subtitle">FAQ</ThemedText>
                    {faqs.map((faq) => (
                        <Collapsible key={faq.id} title={faq.question}>
                            <ThemedText>{faq.answer}</ThemedText>
                        </Collapsible>
                    ))}
                </ThemedView>

                <ThemedView style={styles.contactSection}>
                    <ThemedText type="subtitle">Still Need Help?</ThemedText>
                    <Link href="/support" asChild>
                        <Pressable style={styles.contactButton}>
                            <ThemedText style={styles.contactButtonText}>Contact Support</ThemedText>
                        </Pressable>
                    </Link>
                </ThemedView>
            </ScrollView>
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
    section: {
        marginBottom: 24,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    helpItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginVertical: 4,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    pressed: {
        opacity: 0.7
    },
    contactSection: {
        alignItems: 'center',
        padding: 24,
        gap: 16
    },
    contactButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    contactButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
