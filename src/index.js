import './lib';
//import './schema.js';
import studies from './studies/';
import commands from './commands';
import hotkeys from './hotkeys.js';
import ui from './ui';
import header from './header.js';
import HotkeysUtil from './classes/HotkeysUtil.js';
import utils from './utils/';
import metadata from './classes/metadata/';
import cornerstone from './cornerstone.js';
import classes from './classes/';
import redux from './redux/';
import string from './string.js';
import user from './user.js';
import object from './object.js';
import DICOMWeb from './DICOMWeb';
import log from './log.js';
import plugins from './plugins.js';
import extensions from './classes/extensions/';
import measurements from './measurements';
import hangingProtocols from './hanging-protocols';

const OHIF = {
  utils,
  studies,
  redux,
  classes,
  metadata,
  hotkeys,
  HotkeysUtil,
  header,
  cornerstone,
  string,
  ui,
  user,
  object,
  commands,
  log,
  DICOMWeb,
  plugins,
  extensions,
  viewer: {},
  measurements,
  hangingProtocols,
};

export {
  utils,
  studies,
  redux,
  classes,
  metadata,
  hotkeys,
  header,
  cornerstone,
  string,
  ui,
  user,
  object,
  commands,
  log,
  DICOMWeb,
  plugins,
  extensions,
  measurements,
  hangingProtocols,
};

export { OHIF };

export default OHIF;
