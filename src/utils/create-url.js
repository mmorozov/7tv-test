import { omit } from 'ramda';
import template from 'url-template';

export default (url, params, exclude = []) => {
  if (!url) return null;

  return template.parse(url).expand(omit(exclude, params));
};
