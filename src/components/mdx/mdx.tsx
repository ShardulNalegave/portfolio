
import { Anchor } from './anchor';
import { Blockquote } from './blockquote';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from './heading';
import { OrderedList, UnorderedList } from './lists';
import { Image } from './image';
import { Paragraph } from './paragraph';

export const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  a: Anchor,
  img: Image,
  p: Paragraph,
};