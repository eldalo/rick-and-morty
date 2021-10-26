import { createRoutine } from 'redux-saga-routines';
import { RM_LIST_PROFILES, RM_VIEW_PROFILE } from './types';

export const listProfiles = createRoutine(RM_LIST_PROFILES);
export const viewProfile = createRoutine(RM_VIEW_PROFILE);
