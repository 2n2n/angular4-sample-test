import { greet } from './greet';
describe('greet', () => {
    it('should inclide the name in the message', () => {
        expect(greet('Ton')).toContain('Ton');
    })
});