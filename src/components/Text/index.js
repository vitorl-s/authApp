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
    text-decoration-color : ${Colors.Text}
  `,
  buttonText: () => `
    font-size:18px;
  `,
  title: () => `
    font-size:18px;
    align-self:center;
  `,
};

export const Text = styled.Text`
  font-size: 12px;
  color: ${Colors.Text};

  ${applyStyleModifiers(MODIFIERS)}
`;
