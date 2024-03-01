import { createSelector } from 'reselect';
import { RootState } from '@/lib/store';
import { User } from '../../slices';

const getUser = (user: User | null) => {
    return user
}

export default createSelector((state: RootState) => state.authReducer.user, getUser);