import * as fromAlumnosState from './alumnos-state.reducer';
import { selectAlumnosState } from '../state/alumnos-state.selectors';

describe('AlumnosState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlumnosState({
      [fromAlumnosState.alumnosStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
