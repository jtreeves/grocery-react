import findProductsByCategory from '../../utilities/findProductTalliesByCategory'

describe('findProductsByCategory utility', () => {
    it('should be a function', () => {
        expect(typeof findProductsByCategory).toBe('function')
    })
})
