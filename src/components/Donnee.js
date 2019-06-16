import React from 'react';
import { Card, CardText, CardBody ,CardHeader,Jumbotron,Container,Row,Col} from 'reactstrap';
import './Donnee.css';
import Graph from './Graph';

const Donnee =(props)=> {
   
    return(
        <div>
            <Jumbotron>
                <Container fluid>
                <Card className="mycard">
                    <CardBody>
                    <CardHeader><h4>RoboTrader Prediction for Tue Jun 12 2018</h4></CardHeader>
                        <CardBody>
                        <Row>

                            <Col sm="3">
                            <Card className="mycard" body inverse color="success" style={{width:"100%", height:"300px"}}>
                                <CardHeader><h5>Top Sales</h5></CardHeader>
                                <hr className="my-0" />
                                <CardText>
                                            {props.users.map(user=>{
                                                            if(((user.Classe)==="A")&&(user.Signal==="Sell"))
                                                                return (
                                                                    <div key={user.id}>{user.Valeur}</div>
                                                                )
                                                        })}
                                                
                                </CardText>
                            </Card>
                            </Col>
                            <Col sm="3">
                                <Card className="mycard" body inverse color="danger" style={{width:"100%", height:"300px"}}>
                                    <CardHeader><h5>Top Buy</h5></CardHeader>
                                    <hr className="my-0" />
                                    <CardText>
                                    {props.users.map(user=>{
                                                            if(((user.Classe)==="A")&&(user.Signal==="Buy"))
                                                                return (
                                                                    <div key={user.id}>{user.Valeur}</div>
                                                                )
                                                        })} 
                                    </CardText>
                                </Card>
                            </Col>
                            <Col sm="6">
                            <Graph/>
                            </Col>
                            
                            <CardBody>
                                <Row>
                               <h4> Recommandations Details</h4>
                               </Row>
                                <Row>
                                    <Col sm="3">
                                    <Card className="mycard"style={{width:"100%", height:"300px"}}>
                                        <CardHeader><strong>Sell</strong></CardHeader>
                                        <CardBody>
                                            
                                            <CardText>
                                            {props.users.map(user=>{
                                                            if(((user.Classe)==="B")&&(user.Signal==="Sell"))
                                                                return (
                                                                    <div key={user.id}>{user.Valeur}</div>
                                                                )
                                                        })}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    </Col>
                                    <Col sm="3">
                                    <Card className="mycard" style={{width:"100%", height:"300px"}}>
                                        <CardHeader><strong>Buy</strong></CardHeader>
                                        <CardBody>
                                            
                                            <CardText>
                                            {props.users.map(user=>{
                                                            if(((user.Classe)==="B")&&(user.Signal==="Buy"))
                                                                return (
                                                                    <div key={user.id}>{user.Valeur}</div>
                                                                )
                                                        })}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    
                                    </Col>
                                </Row>
                                <Row className="monstyle">
                                <Col sm="3">
                                    <Card className="mycard" style={{width:"100%", height:"300px"}}>
                                        <CardHeader><strong>Sell</strong></CardHeader>
                                        <CardBody>
                                            
                                            <CardText> </CardText>
                                        </CardBody>
                                    </Card>
                                    </Col>
                                    <Col sm="3">
                                    <Card className="mycard" style={{width:"100%", height:"300px"}}>
                                        <CardHeader><strong>Buy</strong></CardHeader>
                                        <CardBody>
                                            
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                    </Col>
                                    
                                </Row>
                                
                                </CardBody>
                               
                             
                        </Row>
                        </CardBody>
                    </CardBody>
                </Card>
                
                </Container>
                </Jumbotron>
            
        </div>
    );
};
export default Donnee;
