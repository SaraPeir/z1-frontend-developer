import Camera from '.';
import renderWithProviderAndLocalState from '../../testing-utils/renderWithProvider'
import {fireEvent, screen} from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),

  useHistory: () => ({
    push: jest.fn()
  })
}));

const renderComponent = (
  apiHasBeenCalled, 
  hasPhotoBeenTakenCorrectly, 
  src,
  isLightSufficient,
  ) => {
      const state = {
        fetchApi: {
            value: {
                apiHasBeenCalled,
                hasPhotoBeenTakenCorrectly
            },
            photo: {
                srcPhoto: src
            }
        }
      }

      const props = {
        apiHasBeenCalled,
        isLightSufficient,
        hasPhotoBeenTakenCorrectly,
        fotoSrc: src
      }

      return renderWithProviderAndLocalState(
        <Camera {...props} />, 
        { preloadedState: state}
      )
    }

describe('<Camera />', () => {

  describe('(i) there is not prior photo, (ii) camera has not been clicked', () => {
    beforeEach(() => {
      // args: apiHasBeenCalled, hasPhotoBeenTakenCorrectly, src, isLightSufficient
      renderComponent(false, false, '', true);
    })

    it('should not display a photo', () => {
      const photo = screen.queryByLabelText('licence-camera');
      expect(photo).not.toBeInTheDocument()
    })

    it('should display the scanner', () => {
        const scanner = screen.queryByTestId('scanner');
        expect(scanner).toBeInTheDocument()
    })

    it('should display the cancel button', () => {
        const cancelButton = screen.queryByTestId('cancel-button');
        expect(cancelButton).toBeInTheDocument()
    })

    it('should not display the "correct" photo label', () => {
      const label = screen.queryByTestId('correct-photo-label');
      expect(label).not.toBeInTheDocument()
    })

    it('should not display the low light label if light is sufficient', () => {
      const label = screen.queryByTestId('low-light-label');
      expect(label).not.toBeInTheDocument()
    })
  })

  describe('(i) there is not prior photo, (ii) camera has been clicked and (iii) API call has not been done yet', () => {
    beforeEach(() => {
      // args: apiHasBeenCalled, hasPhotoBeenTakenCorrectly, src, isLightSufficient
      renderComponent(false, false, '', true);
    })

    it('should not display a photo', () => {
      const photo = screen.queryByLabelText('licence-camera');
      expect(photo).not.toBeInTheDocument()
    })

    it('should display the scanner', () => {
        const scanner = screen.queryByTestId('scanner');
        expect(scanner).toBeInTheDocument()
    })

    it('should display the cancel button', () => {
        const cancelButton = screen.queryByTestId('cancel-button');
        expect(cancelButton).toBeInTheDocument()
    })

    it('should not display the "correct" photo label', () => {
      const label = screen.queryByTestId('correct-photo-label');
      expect(label).not.toBeInTheDocument()
    })

    it('should not display the low light label if light is sufficient', () => {
      const label = screen.queryByTestId('low-light-label');
      expect(label).not.toBeInTheDocument()
    })
  })

  describe('(i) camera has been clicked (ii) API call has been done and (iii) photo has been rejected', () => {
    beforeEach(() => {
      const photoLink  = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvVOjhYNJBbFtYSfZ61AZksRLrn-wwsyCEA&usqp=CAU'

      // args: apiHasBeenCalled, hasPhotoBeenTakenCorrectly, src, isLightSufficient
      renderComponent(true, false, photoLink, true);
    })

    it('should display a photo', async() => {
      const camera = screen.queryByTestId('camera');

      // by clicking in the camera, we set both analysisHasStarted and hasBeenClicked to true
      fireEvent.click(camera)
      const photo = screen.getByRole('img')
      expect(photo).toBeInTheDocument()
    })

    it('should not display the scanner', () => {
        const scanner = screen.queryByTestId('scanner');
        expect(scanner).not.toBeInTheDocument()
    })

    it('should display the cancel button', () => {
        const cancelButton = screen.queryByTestId('cancel-button');
        expect(cancelButton).toBeInTheDocument()
    })

    it('should not display the "correct" photo label', () => {
      const label = screen.queryByTestId('correct-photo-label');
      expect(label).not.toBeInTheDocument()
    })

    it('should always not display the low light label', () => {
      const label = screen.queryByTestId('low-light-label');
      expect(label).not.toBeInTheDocument()
    })
  })

  describe('(i) camera has been clicked (ii) API call has been done and (iii) photo has been approved', () => {
    beforeEach(() => {
      const photoLink  = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvVOjhYNJBbFtYSfZ61AZksRLrn-wwsyCEA&usqp=CAU'

      // args: apiHasBeenCalled, hasPhotoBeenTakenCorrectly, src, isLightSufficient
      renderComponent(true, true, photoLink, true);
    })

    it('should display a photo', () => {
      const camera = screen.queryByTestId('camera');
      fireEvent.click(camera)
      const photo = screen.queryByAltText('licence-camera');
      expect(photo).toBeInTheDocument()
    })

    it('should not display the scanner', () => {
        const scanner = screen.queryByTestId('scanner');
        expect(scanner).not.toBeInTheDocument()
    })

    it('should display the cancel button', () => {
        const cancelButton = screen.queryByTestId('cancel-button');
        expect(cancelButton).toBeInTheDocument()
    })

    it('should display the "correct" photo label', () => {
      const label = screen.queryByTestId('correct-photo-label');
      expect(label).not.toBeInTheDocument()
    })

    it('should always not display the low light label', () => {
      const label = screen.queryByTestId('low-light-label');
      expect(label).not.toBeInTheDocument()
    })
  })
})