import request from 'superagent';

export default {
  postContact(contactInfo) {
    return request
            .post('/contact')
            .send({
              contactInfo
            })
            .set('Accept', 'application/json');
  }
};
