import React from 'react'
import Layout from '../../components/layouts';
import {Jumbotron, Row, Col, Container} from 'react-bootstrap';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <Layout sidebar >
      <h1>Home</h1>

      {/* <Jumbotron
        style={{ margin: "5rem", background: "#ffff" }}
        className="text-center"
      >
        <h1>Welcome to admin dashboard</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;