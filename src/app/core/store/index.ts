import { ActionReducerMap } from '@ngrx/store';
import { reducer, State as InscriptionsState, inscriptionsFeatureKey } from '../../features/dashboard/inscriptions/store/inscriptions.reducer';

export const counterFeatureName = 'counter';
export const authFeatureName = 'auth';

export interface RootState {
  [inscriptionsFeatureKey]: InscriptionsState;
}

export interface Student {
  id: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  celular: string;
  direccion: string;
  curso: string;
}

export interface Course {
  id: string;
  nombreCurso: string;
  fechaInicioCurso: string;
  fechaFinCurso: string;
  profesor: string;
  costo: string;
}

export interface loadStudentsAndCoursesResp {
  students: Student[];
  courses: Course[];
}

export const rootReducer: ActionReducerMap<RootState> = {
    [inscriptionsFeatureKey]: reducer,
};

