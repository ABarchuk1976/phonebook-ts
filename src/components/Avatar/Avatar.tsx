import { FC } from 'react';
import { AvatarWrapper, FirstLetters } from './Avatar.styled';

type Props = {
	str: string
}

const Avatar: FC<Props> = ({ str }) => {
  const firstLetters = str
    ? str
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('')
    : ' ';

  return (
    <AvatarWrapper>
      <FirstLetters>{firstLetters}</FirstLetters>
    </AvatarWrapper>
  );
};

export default Avatar;
