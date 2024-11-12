import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../done/accordion'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from '@jest/globals'

describe('Accordion components', () => {
    // AccordionItem Tests
    describe('AccordionItem', () => {
        it('should render without crashing', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent>Accordion Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByText('Accordion Content')).toBeInTheDocument()
        })

        it('should apply the correct class when provided', () => {
            render(
                <Accordion>
                    <AccordionItem className="custom-item">
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent>Accordion Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByText('Accordion Content')).toHaveClass('custom-item')
        })
    })

    // AccordionTrigger Tests
    describe('AccordionTrigger', () => {
        it('should render with default props', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent>Accordion Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByText('Trigger Content')).toBeInTheDocument()
        })

        it('should apply the correct size and position classes', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger size="lg" position="left">
                            Trigger Content
                        </AccordionTrigger>
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            const trigger = screen.getByText('Trigger Content')
            expect(trigger).toHaveClass('text-lg') // Check size
            expect(trigger).toHaveClass('flex-row-reverse') // Check position
        })

        it('should render with an icon', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger icon={<ChevronRightIcon />}>
                            Trigger Content
                        </AccordionTrigger>
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByRole('img')).toBeInTheDocument() // Check if icon is present
        })

        it('should toggle the accordion on click', async () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )

            const trigger = screen.getByText('Trigger Content')
            const content = screen.getByText('Content')

            // Initially, the content is hidden
            expect(content).toHaveClass('overflow-hidden')

            // Simulate a click on the trigger to open the accordion
            await userEvent.click(trigger)

            // After click, the content should be visible
            expect(content).not.toHaveClass('overflow-hidden')
        })

        it('should use the correct "as" prop and render the corresponding element', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger as="h2">Trigger Content</AccordionTrigger>
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument() // Check for <h2> element
        })

        it('should log a console assertion error for invalid "as" prop', () => {
            const spy = jest.spyOn(console, 'assert').mockImplementation(() => {})
            render(
                <Accordion>
                    <AccordionItem>
                        {/* Invalid 'as' prop */}
                        <AccordionTrigger as="invalid">Trigger Content</AccordionTrigger>
                        <AccordionContent>Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(spy).toHaveBeenCalled()
        })
    })

    // AccordionContent Tests
    describe('AccordionContent', () => {
        it('should render content correctly', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent>Accordion Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByText('Accordion Content')).toBeInTheDocument()
        })

        it('should apply the correct class when provided', () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent className="custom-content">Accordion Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            expect(screen.getByText('Accordion Content')).toHaveClass('custom-content')
        })

        it('should apply the correct class and toggle visibility when clicked', async () => {
            render(
                <Accordion>
                    <AccordionItem>
                        <AccordionTrigger>Trigger Content</AccordionTrigger>
                        <AccordionContent className="custom-content">Accordion Content</AccordionContent>
                    </AccordionItem>
                </Accordion>
            )

            const trigger = screen.getByText('Trigger Content')
            const content = screen.getByText('Accordion Content')

            // Initially, the content should be hidden
            expect(content).toHaveClass('overflow-hidden')

            // Simulate a click on the trigger to open the accordion
            await userEvent.click(trigger)

            // After click, the content should be visible and have the correct class
            expect(content).toHaveClass('custom-content')
            expect(content).not.toHaveClass('overflow-hidden')
        })
    })
})
