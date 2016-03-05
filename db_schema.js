import Realm from 'realm';

const realm = new Realm({schema:
  [{
    name:'Post', 
    properties: { titleOfPic: 'string', descOfPic: 'string', picUrl: 'string'}
  }]
});

export default realm;

