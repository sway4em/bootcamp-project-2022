import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Navbar() {
  return (
    <header>
    <div className="top-panel">
        <h1>Swayam's Recipes</h1>
        <div className="top-left-panel">
        <Button variant="primary" className="mr-1">
        <Link to="index" id='but'>Home</Link>
    </Button>
    <Button variant="primary" className="mr-1">
        <Link to="about" id='but'>About</Link>
    </Button>
        </div>
    </div>
    </header>
  );
}