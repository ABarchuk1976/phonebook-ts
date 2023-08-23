import PropTypes from 'prop-types';
import { AvatarWrapper, FirstLetters } from './Avatar.styled';

const Avatar = ({ str }) => {
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

Avatar.propTypes = {
  str: PropTypes.string.isRequired,
};

export default Avatar;
