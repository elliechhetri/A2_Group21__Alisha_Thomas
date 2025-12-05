import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2c6fffff',
        tabBarInactiveTintColor: '#e0e0e0ff',
        tabBarStyle: {
          backgroundColor: '#000000ff',
          borderTopColor: '#dddddd',
          height: 80,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>



      <Tabs.Screen
        name="index"
        options={{
          title: 'Currency Converter',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="dollarsign.arrow.circlepath" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
