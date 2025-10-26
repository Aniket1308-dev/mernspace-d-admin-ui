import {it, describe, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import LoginPage from './login';
import '@testing-library/jest-dom'


describe('Login Page', () => {
    it('should render with required fields', () => {
        render(<LoginPage/>);
        // getBy -> throws an error
        // findBy -> async
        // queryBy -> null
        expect(screen.getByText("Sign in")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Log in'})).toBeInTheDocument();
        expect(screen.getByRole('checkbox', {name: 'Remember me'})).toBeInTheDocument();
        expect(screen.getByText("Forgot password")).toBeInTheDocument();

    })
})