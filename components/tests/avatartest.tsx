import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../done/avatar';
import { StatusBadge } from '../done/status-badge';
import {describe, expect, it} from "@jest/globals";

// Mock StatusBadge component if necessary
jest.mock('../done/status-badge', () => ({
    StatusBadge: jest.fn(({ size, status }) => <div data-testid="status-badge" data-size={size} data-status={status}></div>),
}));

describe('Avatar Component', () => {
    it('should render Avatar with default props', () => {
        render(<Avatar>Default Avatar</Avatar>);
        const avatar = screen.getByText('Default Avatar');
        expect(avatar).toHaveClass('rounded-full h-12 w-12'); // md size by default
    });

    it('should apply correct classes based on size prop', () => {
        render(<Avatar size="lg">Large Avatar</Avatar>);
        const avatar = screen.getByText('Large Avatar');
        expect(avatar).toHaveClass('h-[72px] w-[72px]'); // lg size
    });

    it('should apply active ring when active prop is true', () => {
        render(<Avatar active>Active Avatar</Avatar>);
        const avatarWrapper = screen.getByText('Active Avatar').parentElement;
        expect(avatarWrapper).toHaveClass('border-opacity-100'); // Active ring class
    });

    it('should render with different variants', () => {
        render(<Avatar variant="group">Group Avatar</Avatar>);
        const avatar = screen.getByText('Group Avatar');
        expect(avatar).toHaveClass('rounded-[5px]'); // Group variant class
    });

    it('should render StatusBadge with correct size and status props', () => {
        render(<Avatar size="sm" status="online">Avatar with Status</Avatar>);
        const statusBadge = screen.getByTestId('status-badge');
        expect(statusBadge).toHaveAttribute('data-size', 'sm');
        expect(statusBadge).toHaveAttribute('data-status', 'online');
    });

    describe('AvatarImage Component', () => {
        it('should render AvatarImage with custom size', () => {
            render(<Avatar size={"sm"}><AvatarImage src="/test.jpg"  alt="Avatar Image" /></Avatar>);
            const image = screen.getByRole('img', { name: 'Avatar Image' });
            expect(image).toHaveClass('h-8 w-8'); // sm size
        });

        it('should render image with provided src', () => {
            render(<Avatar><AvatarImage size="200px" src="/test.png" role={"img"} alt="Avatar Image" /></Avatar>);
            const image = screen.getByRole('img', { name: 'Avatar Image' });
            expect(image).toHaveAttribute('src', '/test.png');
        });
    });

    describe('AvatarFallback Component', () => {
        it('should render initials from provided children', () => {
            render(<Avatar> <AvatarFallback data-testid="fallback-icon" size="md">John Doe</AvatarFallback> </Avatar>);
            const fallback = screen.getByText('JD');
            expect(fallback).toBeInTheDocument();
        });

        it('should render icon when no children are provided', () => {
            render(<Avatar> <AvatarFallback  size="lg" /> </Avatar>);
            const icon = screen.getByTestId('fallback-icon');
            expect(icon).toBeInTheDocument();
            expect(icon).toHaveClass('text-2xl');
        });

        it('should apply correct size to fallback icon', () => {
            render(
                <Avatar>
                    <AvatarFallback size={"md"} />
                </Avatar>
            );
            const icon = screen.getByTestId('fallback-icon');
            expect(icon).toHaveAttribute('data-size', '30'); // Verify the correct data attribute
        });

    });
});