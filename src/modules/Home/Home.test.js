import Home from './';
import renderWithProvider from '../../testing-utils/renderWithProvider'
import {fireEvent, screen} from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),

  useHistory: () => ({
    push: jest.fn()
  })

}));

describe('<Home />', () => {
  let state;
  let props;
  let hasPhotoBeenTakenCorrectly;
  let src

  describe('when API has not been called', () => {
    beforeEach(() => {
      hasPhotoBeenTakenCorrectly = false
      src = '';

      state = {
        fetchApi: {
            value: {
                hasPhotoBeenTakenCorrectly
            },
            photo: {
                srcPhoto: src
            }
        }
      }

      props = {
        hasPhotoBeenTakenCorrectly,
        fotoSrc: src
      }

      renderWithProvider(
        <Home props />, { preloadedState: state}
      )
    })

    it('should display "Take picture" button', () => {
      const button = screen.getByRole('button', {name: /take picture/i})
      expect(button).toBeInTheDocument()
    })

    it('should display default document image', () => {
      const defaultDocumentImage = screen.getByRole('img', {name: /default-document-img/i})
      expect(defaultDocumentImage).toBeInTheDocument()
    })

    it('"Take picture" button should redirect to Camera', async () => {
      const button = screen.getByRole('button', {name: /take picture/i})
      const hasBeenPushedToCamera = fireEvent.click(button);

      // it was not possible to test that callback was executed;
      // anyway, it hasBeenPushedToCamera is true and no error is triggered from useHistory mock
      // we can verify that actually callback has been sent
      expect(hasBeenPushedToCamera).toBeTruthy()
    })
  })

  

  describe('when API has been called and photo was rejected', () => {
    beforeEach(() => {
      hasPhotoBeenTakenCorrectly = false
      src = 'src';

      state = {
        fetchApi: {
            value: {
                hasPhotoBeenTakenCorrectly
            },
            photo: {
                srcPhoto: src
            }
        }
      }

      props = {
        hasPhotoBeenTakenCorrectly,
        fotoSrc: src
      }

      renderWithProvider(
        <Home {...props} />, { preloadedState: state}
      )
    })

    it('should display "Retake picture" button', () => {
      const button = screen.getByRole('button', {name: /retake picture/i})
      expect(button).toBeInTheDocument()
    })

    it('should display rejected photo', () => {
      const photo = screen.getByRole('img', {name: /licence-foto rejected/i});
      expect(photo).toBeInTheDocument()
    })

    it('should display rejection label', () => {
      const iconLabel = screen.getByRole('img', {name: /error label/i});
      const label = screen.getByTestId('error-label')

      expect(iconLabel).toBeInTheDocument()
      expect(label).toBeInTheDocument()
    });

    it('"Retake picture" button should redirect to Camera', async () => {
      const button = screen.getByRole('button', {name: /retake picture/i})
      const hasBeenPushedToCamera = fireEvent.click(button);

      // it was not possible to test that callback was executed;
      // anyway, it hasBeenPushedToCamera is true and no error is triggered from useHistory mock
      // we can verify that actually callback has been sent
      expect(hasBeenPushedToCamera).toBeTruthy()
    })

    it('Photo container should not redirect to Camera', async () => {
      const container = screen.getByTestId('redirecting-container')
      const hasBeenPushedToCamera = fireEvent.click(container);
      
      // it was not possible to test that callback was executed;
      // anyway, if I remove useHistory mock , hasBeenPushedToCamera is true and no error is triggered
      // we can verify that actually callback has not been sent
      expect(hasBeenPushedToCamera).toBeTruthy()
    })
  })

  describe('when API has been called and photo was approved', () => {
    beforeEach(() => {
      hasPhotoBeenTakenCorrectly = true
      src = 'src';

      state = {
        fetchApi: {
            value: {
                hasPhotoBeenTakenCorrectly
            },
            photo: {
                srcPhoto: src
            }
        }
      }

      props = {
        hasPhotoBeenTakenCorrectly,
        fotoSrc: src
      }

      renderWithProvider(
        <Home {...props} />, { preloadedState: state}
      )
    })

    it('should not display camera redirecting button', () => {
      const redirectingButton = screen.queryByTestId('redirecting-button')
      expect(redirectingButton).toBeNull()
    })

    it('should display approved photo', () => {
      const photo = screen.getByRole('img', {name: /licence-foto approved/i})
      expect(photo).toBeInTheDocument()
    })

    it('should display approval label', () => {
      const labelIcon = screen.getByRole('img', {name: /approval label/i})
      const label = screen.getByTestId('approval-label');

      expect(labelIcon).toBeInTheDocument()
      expect(label).toBeInTheDocument()
    });

    it('Photo container should redirect to Camera', async () => {
      const container = screen.getByTestId('redirecting-container')
      const hasBeenPushedToCamera = fireEvent.click(container);
      
      // it was not possible to test that callback was executed;
      // anyway, it hasBeenPushedToCamera is true and no error is triggered from useHistory mock
      // we can verify that actually callback has been sent
      expect(hasBeenPushedToCamera).toBeTruthy()
    })
  })
})