import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
//alternatywa https://icons.expo.fyi/
//możesz usunąć ten komponent

export function TabBarIcon({ size, style, className, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>)
{
  return <Ionicons size={size} style={[{ marginBottom: -3 }, style]} className={className} {...rest} />;
}
