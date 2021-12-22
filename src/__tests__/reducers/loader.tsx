import { loader } from '../../store/loader/reducers';

describe('Loader reducer', () => {
  it('Show loader', () => {
    expect(
      loader(undefined, {
        type: 'SET_LOADER',
        payload: true,
      }),
    ).toEqual(1);
  });

  it('Hide loader', () => {
    expect(
      loader(1, {
        type: 'SET_LOADER',
        payload: false,
      }),
    ).toEqual(0);
  });
});
