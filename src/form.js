import {  Form , Col} from 'react-bootstrap'

const F = ({e}) => {
  return (
    <div>
      <Form>
          <h1 style={{textAlign:"center"}}>{e.id}</h1>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>name</Form.Label>
            <Form.Control type="text"  value={e.name}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={e.email} />
          </Form.Group>

          
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>username</Form.Label>
            <Form.Control type="text"  value={e.username}/>

          </Form.Group>
          <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control value={e.address.city} />
        </Form.Group>
        </Form.Row>

        
        
      </Form>
    </div>
  );
};
export default F;