// Makes all controls available in styleguidist examples without explicit imports.

import hocs from './src/components/hocs';

import Carousel from './src/components/collections/Carousel/Carousel';
import Grid from './src/components/collections/Grid/Grid';
import List from './src/components/collections/List/List';

import Card from './src/components/containers/Card/Card';
import Modal from './src/components/containers/Modal/Modal';

import Icon from './src/components/Icon';

import Button from './src/components/inputs/Button/Button';
import Checkbox from './src/components/inputs/Checkbox/Checkbox';
import Tristate from './src/components/inputs/Checkbox/Tristate';
import Select from './src/components/inputs/Select/Select';
import Text from './src/components/inputs/Text/Text';
import Toggle from './src/components/inputs/Toggle/Toggle';

global.hocs = hocs;

global.Carousel = Carousel;
global.Grid = Grid;
global.List = List;

global.Card = Card;
global.Modal = Modal;

global.Icon = Icon;

global.Button = Button;

global.Checkbox = Checkbox;
global.Tristate = Tristate;

global.Select = Select;

global.Text = Text;

global.Toggle = Toggle;
