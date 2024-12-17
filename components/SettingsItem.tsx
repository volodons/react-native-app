import { StyleSheet, Pressable, Switch } from 'react-native';

import { ThemedText } from './ThemedText';

interface SettingsItemProps {
    title: string;
    hasSwitch?: boolean;
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    onPress?: () => void;
}

export function SettingsItem({ title, hasSwitch, value, onValueChange, onPress }: SettingsItemProps) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
            <ThemedText>{title}</ThemedText>
            {hasSwitch && <Switch value={value} onValueChange={onValueChange} />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    pressed: {
        opacity: 0.7
    }
});
