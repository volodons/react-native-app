import { Tabs } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IconSymbol name="house.fill" color={color} size={28} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <IconSymbol name="person.fill" color={color} size={28} />
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <IconSymbol name="gear" color={color} size={28} />
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => <IconSymbol name="paperplane.fill" color={color} size={28} />
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <IconSymbol name="heart.fill" color={color} size={28} />
                }}
            />
            <Tabs.Screen
                name="help"
                options={{
                    title: 'Help',
                    tabBarIcon: ({ color }) => <IconSymbol name="bell.fill" color={color} size={28} />
                }}
            />
        </Tabs>
    );
}
