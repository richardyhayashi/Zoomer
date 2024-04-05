'use client';

import React, { useEffect, useState } from 'react';
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk';
import { Button } from '@/components/ui/button';

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void}) => {
  const [isMicCamToggleOn, setisMicCamToggleOn] = useState(false);
  const call = useCall();
  
  if (!call) {
    throw new Error('useCall must be used within StreamCall component');
  }

  useEffect(() => {
  
    return () => {
      if (isMicCamToggleOn) {
        call?.camera.disable();
        call?.microphone.disable();
      } else {
        call?.camera.enable();
        call?.microphone.enable();
      }
    }
  }, [isMicCamToggleOn, call?.camera, call?.microphone]);
  

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <div className='flex flex-col h-16 items-center justify-center gap-3'>
            <label className='flex items-center justify-center gap-2 font-medium'>
                <input
                    type="checkbox"
                    checked={isMicCamToggleOn}
                    onChange={(e) => setisMicCamToggleOn(e.target.checked)}
                />
                Join with mic and camera off
            </label>
            <DeviceSettings />
            <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={() => {
                call.join();

                setIsSetupComplete(true);
            }}>
                Join meeting
            </Button>
        </div>
    </div>
  );
}

export default MeetingSetup;