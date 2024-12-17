import { MaterialIcons } from '@expo/vector-icons';
import { SFSymbol, SymbolWeight } from 'expo-symbols';
import React from 'react';
import { Platform, OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

const MAPPING = {
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
    gear: 'settings',
    'person.fill': 'person',
    'bell.fill': 'notifications',
    'heart.fill': 'favorite',
    'bookmark.fill': 'bookmark',
    'trash.fill': 'delete',
    'square.and.pencil': 'edit',
    'plus.circle.fill': 'add-circle'
} as const;

export type IconSymbolName = keyof typeof MAPPING;

interface IconSymbolProps {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
    animated?: boolean;
}

export function IconSymbol({ name, size = 24, color, style, weight = 'regular', animated = false }: IconSymbolProps) {
    if (Platform.OS === 'ios') {
        return <SFSymbol name={name} size={size} color={color} weight={weight} style={style} animated={animated} />;
    }

    return <MaterialIcons name={MAPPING[name]} size={size} color={color} style={style} />;
}
