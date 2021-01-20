import React from 'react';
import {Button, Card, Accordion, InputGroup} from 'react-bootstrap';

function FormBody(props){


  return(
    <div>
      {props.datas.map((data, index) => {
        return (
          <div>
            <InputGroup className="d-block">
              <Accordion className="mt-5 pt-5" defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <p>{data.name}</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <p><b>Name:</b>{data.name}</p>
                    <p><b>Surname:</b>{data.surname}</p>
                    <p><b>E-mail:</b>{data.email}</p>
                    <p><b>Title:</b>{data.title}</p>
                    <p><b>Note:</b>{data.note}</p>
                    <div >
                      <Button
                          className="d-inline-block m-5"
                          type="submit"
                          variant="danger"
                          onClick={() => props.deletePost(index)}
                      >
                        <i class="fas fa-user-minus"></i>
                      </Button>
                      <Button
                        type="submit"
                        className="btn btn-success"
                        onClick={() =>
                          props.editPost({
                            id: index,
                            name: data.name,
                            surname: data.surname,
                            email: data.email,
                            title: data.title,
                            note: data.note,
                            })
                          }
                        >
                          <i class="fas fa-user-edit"></i>
                        </Button>
                      </div>  
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>               
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </InputGroup>         
          </div>
        );
      })}
    </div>
  )
}

export default FormBody;




    

