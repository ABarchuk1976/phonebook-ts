import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../../redux/store';

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();