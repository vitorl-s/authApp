/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Colors } from '../../constants/colors';

const MODIFIERS = {
  bold: () => `
    font-weight: bold;
  `,
  danger: () => `
    color: ${Colors.Error};
  `,
  underline: () => `
    font-weight: bold;
    text-decoration: underline;
  `,
};

export const Text = styled.Text`
  font-size: 14px;
  color: ${Colors.Text};

  ${applyStyleModifiers(MODIFIERS)}
`;
