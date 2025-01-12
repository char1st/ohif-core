import actions from './actions.js';
import * as types from './constants/ActionTypes.js';

describe('actions', () => {
  test('exports have not changed', () => {
    const expectedExports = [
      'setViewportActive',
      'setViewportSpecificData',
      'setLayout',
      'clearViewportSpecificData',
      'setActiveViewportSpecificData',
      'setToolActive',
      'setStudyLoadingProgress',
      'clearStudyLoadingProgress',
      'setUserPreferences',
      'setCommandContext',
      'addPlugin',
      'setAvailableButtons',
      'setExtensionData',
      'setTimepoints',
      'setMeasurements',
      'setStudyData',
    ].sort();

    const exports = Object.keys(actions).sort();

    expect(exports).toEqual(expectedExports);
  });

  describe('viewport action creators', () => {
    // setViewportSpecificData,
    // clearViewportSpecificData,

    it('should create an action to set the viewport specific data', () => {
      const data = {
        displaySetInstanceUid: 'ef859a23-4631-93ab-d26b-7940a822c699',
        seriesDate: '20151026',
        seriesTime: '082611.370000',
        seriesInstanceUid:
          '1.3.6.1.4.1.25403.345050719074.3824.20170126085406.5',
        seriesNumber: 2,
        seriesDescription: 'Chest 3x3 Soft',
        numImageFrames: 126,
        modality: 'CT',
        isMultiFrame: false,
        instanceNumber: 1,
        studyInstanceUid:
          '1.3.6.1.4.1.25403.345050719074.3824.20170126085406.1',
        sopClassUids: ['1.2.840.10008.5.1.4.1.1.2'],
        plugin: 'cornerstone',
        viewport: {
          zoomScale: null,
          rotation: 360,
          resetViewport: null,
          invert: null,
          vflip: null,
          hflip: null,
          clearTools: null,
          scrollUp: null,
          scrollDown: null,
          scrollFirstImage: null,
          scrollLastImage: null,
          previousPanel: null,
          nextPanel: null,
          nextSeries: null,
          previousSeries: null,
        },
      };

      const expectedAction = {
        type: types.SET_ACTIVE_SPECIFIC_DATA,
        data,
      };

      expect(actions.setActiveViewportSpecificData(data)).toEqual(
        expectedAction
      );
    });

    it('should create an action to clear clearViewportSpecificData', () => {
      const viewportIndex = 1;
      const expectedAction = {
        type: types.CLEAR_VIEWPORT,
        viewportIndex,
      };
      expect(actions.clearViewportSpecificData(viewportIndex)).toEqual(
        expectedAction
      );
    });

    it('should create an action to set the active viewport', () => {
      const viewportIndex = 1;
      const expectedAction = {
        type: types.SET_VIEWPORT_ACTIVE,
        viewportIndex,
      };
      expect(actions.setViewportActive(viewportIndex)).toEqual(expectedAction);
    });

    it('should create an action to set the viewport layout', () => {
      const layout = {
        viewports: [
          {
            height: '100%',
            width: '100%',
          },
        ],
      };
      const expectedAction = {
        type: types.SET_VIEWPORT_LAYOUT,
        layout,
      };
      expect(actions.setLayout(layout)).toEqual(expectedAction);
    });
  });
});
