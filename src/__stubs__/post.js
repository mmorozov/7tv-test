import casual from 'casual';

export default extra => ({
  id: casual.uuid,
  title: casual.title,
  body: casual.text,
  ...extra,
});
