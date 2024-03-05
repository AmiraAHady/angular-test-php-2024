import { CustomPipePipe } from './custom-pipe.pipe';

describe('Test CustomPipe', () => {
  let pipe:CustomPipePipe;
  //teardown
  beforeEach(() => {
    pipe = new CustomPipePipe();
  });
  // beforeAll()
  // afterEach()
  // afterAll()
  //test if value is passed->return value*value
  it('test if value is passed->return value*value', () => {
    //  expect(functioncall).matchers(actual value)
    //pass
    expect(pipe.transform(4)).toBe(16);
  });

  //test if parameter is not of type number should return" Not a number"
  it('test if parameter is not of type number should return" Not a number"', () => {
    expect(pipe.transform('ali')).toBe('Not a number');
  });
});
