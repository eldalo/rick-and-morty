import { createRoutine } from 'redux-saga-routines';
import { RM_LIST_PROFILES, RM_GET_PROFILE } from './types';

export const listProfiles = createRoutine(RM_LIST_PROFILES);
export const getProfile = createRoutine(RM_GET_PROFILE);
