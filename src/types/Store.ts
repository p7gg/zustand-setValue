import type { FieldPath, FieldPathValue, UnpackNestedValue } from './Paths';

export interface Store {
  nightTab: boolean;
  version: string;
  state: State;
  bookmark: BookmarkElement[];
  updateState: <TFieldName extends FieldPath<Store> = FieldPath<Store>>(
    path: TFieldName,
    value: UnpackNestedValue<FieldPathValue<Store, TFieldName>>
  ) => void;
}

export interface BookmarkElement {
  name: SeparatorClass;
  collapse: boolean;
  toolbar: BookmarkToolbar;
  items: ItemElement[];
}

export interface ItemElement {
  url: string;
  display: ItemDisplay;
  accent: AccentClass;
  color: AccentClass;
  background: ItemBackground;
  border: number;
  shape: Shape;
  timestamp: number;
}

export interface AccentClass {
  by: string;
  hsl: Hsl;
  rgb: RGB;
  opacity?: number;
  blur?: number;
}

export interface Hsl {
  h: number;
  s: number;
  l: number;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface ItemBackground {
  show: boolean;
  type: string;
  opacity: number;
  image: VisualImage;
  video: VisualImage;
}

export interface VisualImage {
  url: string;
}

export interface ItemDisplay {
  alignment: string;
  direction: string;
  order: string;
  rotate: number;
  translate: Translate;
  gutter: number;
  name: DisplayName;
  visual: Visual;
}

export interface DisplayName {
  show: boolean;
  text: string;
  size: number;
}

export interface Translate {
  x: number;
  y: number;
}

export interface Visual {
  show: boolean;
  type: string;
  size: number;
  letter: Letter;
  icon: Icon;
  image: VisualImage;
  shadow: ToolbarClass;
}

export interface Icon {
  name: string;
  prefix: string;
  label: string;
}

export interface Letter {
  text: string;
}

export interface ToolbarClass {
  size: number;
}

export interface Shape {
  wide: boolean;
  tall: boolean;
}

export interface SeparatorClass {
  text: string;
  show: boolean;
}

export interface BookmarkToolbar {
  openAll: HoverScale;
  collapse: HoverScale;
}

export interface HoverScale {
  show: boolean;
}

export interface State {
  layout: StateLayout;
  header: StateHeader;
  bookmark: StateBookmark;
  group: StateGroup;
  toolbar: StateToolbar;
  theme: Theme;
  search: boolean;
  modal: boolean;
  menu: boolean;
}

export interface StateBookmark {
  size: number;
  url: HoverScale;
  line: HoverScale;
  shadow: HoverScale;
  hoverScale: HoverScale;
  orientation: string;
  style: string;
  newTab: boolean;
  edit: boolean;
  add: boolean;
  show: boolean;
  item: PurpleItem;
}

export interface PurpleItem {}

export interface StateGroup {
  area: PurpleArea;
  order: string;
  name: ToolbarClass;
  toolbar: ToolbarClass;
  edit: boolean;
  add: boolean;
}

export interface PurpleArea {
  justify: string;
}

export interface StateHeader {
  item: PurpleArea;
  greeting: Greeting;
  transitional: Transitional;
  clock: Clock;
  date: HeaderDate;
  search: Search;
  order: string[];
  edit: boolean;
}

export interface Clock {
  hour: Hour;
  minute: Hour;
  second: Hour;
  separator: SeparatorClass;
  meridiem: HoverScale;
  hour24: HoverScale;
  size: number;
  newLine: boolean;
}

export interface Hour {
  show: boolean;
  display: string;
}

export interface HeaderDate {
  day: Day;
  date: DateDate;
  month: Day;
  year: Hour;
  separator: SeparatorClass;
  format: string;
  size: number;
  newLine: boolean;
}

export interface DateDate {
  show: boolean;
  display: string;
  ordinal: boolean;
}

export interface Day {
  show: boolean;
  display: string;
  weekStart?: string;
  length: string;
  ordinal?: boolean;
}

export interface Greeting {
  show: boolean;
  type: string;
  custom: string;
  name: string;
  size: number;
  newLine: boolean;
}

export interface Search {
  show: boolean;
  width: Width;
  engine: Engine;
  text: PurpleArea;
  size: number;
  newLine: boolean;
  newTab: boolean;
}

export interface Engine {
  selected: string;
  custom: EngineCustom;
}

export interface EngineCustom {
  name: string;
  url: string;
  queryName: string;
}

export interface Width {
  by: string;
  size: number;
}

export interface Transitional {
  show: boolean;
  type: string;
  size: number;
  newLine: boolean;
}

export interface StateLayout {
  area: AreaClass;
  alignment: string;
  order: string;
  direction: string;
  size: number;
  width: number;
  padding: number;
  gutter: number;
  breakpoint: string;
  scrollbar: string;
  title: string;
  favicon: string;
  overscroll: boolean;
}

export interface AreaClass {
  header: HeaderClass;
  bookmark: HeaderClass;
}

export interface HeaderClass {
  width: number;
  justify: string;
}

export interface Theme {
  color: ThemeColor;
  accent: Accent;
  font: Font;
  background: ThemeBackground;
  opacity: Opacity;
  layout: ThemeLayout;
  header: ThemeHeader;
  bookmark: ThemeBookmark;
  group: ThemeGroup;
  toolbar: SearchClass;
  style: string;
  radius: number;
  shadow: number;
  shade: Shade;
  custom: ThemeCustom;
}

export interface Accent {
  hsl: Hsl;
  rgb: RGB;
  random: Random;
  cycle: Cycle;
}

export interface Cycle {
  active: boolean;
  speed: number;
  step: number;
}

export interface Random {
  active: boolean;
  style: string;
}

export interface ThemeBackground {
  type: string;
  color: EndClass;
  gradient: Gradient;
  image: PurpleImage;
  video: PurpleImage;
}

export interface EndClass {
  hsl: Hsl;
  rgb: RGB;
}

export interface Gradient {
  angle: number;
  start: EndClass;
  end: EndClass;
}

export interface PurpleImage {
  url: string;
  blur: number;
  grayscale: number;
  scale: number;
  accent: number;
  opacity: number;
  vignette: Vignette;
}

export interface Vignette {
  opacity: number;
  start: number;
  end: number;
}

export interface ThemeBookmark {
  color: AccentClass;
  item: FluffyItem;
}

export interface FluffyItem {
  border: number;
  opacity: number;
}

export interface ThemeColor {
  range: Range;
  contrast: Contrast;
  shades: number;
}

export interface Contrast {
  start: number;
  end: number;
}

export interface Range {
  primary: Primary;
}

export interface Primary {
  h: number;
  s: number;
}

export interface ThemeCustom {
  all: any[];
  edit: boolean;
}

export interface Font {
  display: UIClass;
  ui: UIClass;
}

export interface UIClass {
  name: string;
  weight: number;
  style: string;
}

export interface ThemeGroup {
  toolbar: SearchClass;
}

export interface SearchClass {
  opacity: number;
}

export interface ThemeHeader {
  color: AccentClass;
  search: SearchClass;
}

export interface ThemeLayout {
  color: AccentClass;
  divider: ToolbarClass;
}

export interface Opacity {
  general: number;
}

export interface Shade {
  opacity: number;
  blur: number;
}

export interface StateToolbar {
  location: string;
  position: string;
  size: number;
  accent: HoverScale;
  add: HoverScale;
  edit: HoverScale;
  newLine: boolean;
}
