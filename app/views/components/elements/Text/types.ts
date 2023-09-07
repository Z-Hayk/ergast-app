export interface TextProps {
  color?: string;
  light?: boolean;
  regular?: boolean;
  bold?: boolean;
  extraBold?: boolean;

  fs?: number; // fontSize
  lh?: number; // lineHeight

  td?: 'none' | 'underline' | 'line-through' | 'underline line-through'; // textDecorationLine
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // textAlign
}
