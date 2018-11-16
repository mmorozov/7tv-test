import casual from 'casual';

export default extra => ({
  id: casual.uuid,
  name: casual.name,
  body: casual.text,
  email: casual.email,
  ...extra,
});
