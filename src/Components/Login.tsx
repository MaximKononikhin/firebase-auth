import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { login } = useAuth();

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    try {
      setLoading(true);
      setError('');
      await login!(emailRef.current!.value, passwordRef.current!.value);
      history.push('/');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 text-center mt-2">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}

export default Login;
