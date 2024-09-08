import React, { useCallback } from 'react'
import LiveCursors from './cursor/LiveCursors'
import { useMyPresence, useOthers } from '@/liveblocks.config'

function Live() {
    const others = useOthers();
    const [{cursor}, updateMyPresence] = useMyPresence();

    const handlePointerMove = useCallback((event: React.PointerEvent)=>{
        event.preventDefault();
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor:{x,y}});
    }, [])

    const handlePointerDown = useCallback((event: React.PointerEvent)=>{
        
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor:{x,y}});
    }, [])

    const handlePointerLeave = useCallback((event: React.PointerEvent)=>{
        event.preventDefault();
        
        updateMyPresence({cursor:null, message: null});
    }, [])
  return (
    <div onPointerMove={handlePointerMove} 
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
        className=' border-2 border-green-500 h-[100vh] w-full flex justify-center items-center text-center'
    >
        <h1 className=" text-2xl text-white">Liveblocks Figma Clone</h1>
        <LiveCursors others={others} />
    </div>
  )
}

export default Live