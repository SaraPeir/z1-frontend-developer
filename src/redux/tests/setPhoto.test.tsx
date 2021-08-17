import reducer, { assignPhoto, resetPhoto } from '../slices/setPhoto'
import documents from '../../mocked-photos-links'
import {getRandomNumber} from '../slices/getRandomNumber';

jest.mock('../slices/getRandomNumber', () => ({
    getRandomNumber: jest.fn().mockReturnValueOnce(1)
}))

describe('setPhoto reducer', () => {
    describe('assignPhoto action', () => {
        it('should get a random photo to simulate camera outputs', () => {
            const previousState = {
                photo: {
                    srcPhoto: 'src',
                }
            }  

            getRandomNumber.mockReturnValueOnce(1);
            const photoLink = documents[1];

            expect(reducer(previousState, assignPhoto())).toEqual({
                photo: {
                    srcPhoto: photoLink
                }
            })
        })
    })
    
    describe('resetPhoto action', () => {
        it('should get the initial value', () => {
            const previousState = {
                photo: {
                    srcPhoto: 'src',
                }
            }  
        
            expect(reducer(previousState, resetPhoto())).toEqual({
                photo: {
                    srcPhoto: ''
                }
            })
        })
    })
})




