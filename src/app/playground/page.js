'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Modal from '@/components/modal'
import LiveSessionPop from '@/components/liveSessionPop'

export default function PlayGround() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="rounded mt-20 bg-blue-600 px-4 py-2 text-white"
            >
                Open Modal
            </button>

            <Modal isOpen={open} maxWidth='w-fit' onClose={() => setOpen(false)}>
                <LiveSessionPop />
            </Modal>
        </>
    )
}
